type Env = {
  DB: D1Database;
  ADMIN_KEY: string;
};

type LeadRow = {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  country: string;
  message: string | null;
  page_url: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
};

const COOKIE_NAME = "asrs_admin_session";
const SESSION_SECONDS = 60 * 60;
const PAGE_SIZE = 20;
const encoder = new TextEncoder();

const securityHeaders = (contentType = "text/html; charset=utf-8") => {
  const headers = new Headers({ "Content-Type": contentType });
  headers.set("Cache-Control", "no-store");
  headers.set("Content-Security-Policy", "default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'");
  headers.set("Referrer-Policy", "no-referrer");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");
  headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return headers;
};

const escapeHtml = (value: unknown) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[character] ?? character));

const display = (value: unknown) => {
  const text = String(value ?? "").trim();
  return text ? escapeHtml(text) : "—";
};

const page = (title: string, content: string) => `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex,nofollow"><title>${escapeHtml(title)} · ASRS 询盘</title>
<style>
  :root{font-family:system-ui,-apple-system,"Segoe UI",sans-serif;color:#17362e;background:#f5f7f5}
  *{box-sizing:border-box}body{margin:0}main{max-width:1100px;margin:0 auto;padding:32px 18px 70px}
  h1{font-size:1.7rem;margin:0 0 8px}h2{font-size:1.1rem;margin:0}p{line-height:1.55}
  .muted{color:#586a63}.top{display:flex;align-items:start;justify-content:space-between;gap:20px;margin-bottom:24px}
  .lead{background:#fff;border:1px solid #dce5df;border-radius:12px;padding:20px;margin:14px 0;box-shadow:0 2px 10px #10291c0a}
  .lead-head{display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap;border-bottom:1px solid #e7ece8;padding-bottom:12px;margin-bottom:14px}
  .details{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 24px}
  .field{min-width:0}.label{display:block;font-size:.78rem;color:#61736b;margin-bottom:3px}.value{overflow-wrap:anywhere;white-space:pre-wrap}
  .message{grid-column:1/-1;background:#f7faf8;border-radius:8px;padding:12px;white-space:pre-wrap;overflow-wrap:anywhere}
  .wide{grid-column:1/-1}.pagination{display:flex;align-items:center;gap:14px;margin:24px 0}
  a{color:#086a4f}button{border:0;border-radius:7px;background:#075d45;color:white;padding:10px 16px;cursor:pointer;font:inherit}
  input{display:block;width:100%;font:inherit;padding:11px;border:1px solid #9eafa5;border-radius:7px;margin:8px 0 16px}
  .login{max-width:430px;margin:9vh auto;background:white;padding:28px;border:1px solid #dce5df;border-radius:12px}
  .error{color:#a51e28}form{margin:0}@media(max-width:620px){.details{grid-template-columns:1fr}.top{display:block}.top form{margin-top:14px}}
</style></head><body><main>${content}</main></body></html>`;

const loginResponse = (message = "", status = 401) => new Response(page("登录", `
  <section class="login"><h1>ASRS 询盘后台</h1><p class="muted">输入管理员密码查看客户提交的询盘。</p>
  ${message ? `<p class="error" role="alert">${escapeHtml(message)}</p>` : ""}
  <form method="post" action="/admin/leads"><input type="hidden" name="action" value="login">
    <label for="admin-key">管理员密码</label><input id="admin-key" type="password" name="adminKey" autocomplete="current-password" required autofocus>
    <button type="submit">登录</button>
  </form></section>`), { status, headers: securityHeaders() });

const constantTimeEqual = async (left: string, right: string) => {
  const [leftHash, rightHash] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(left)),
    crypto.subtle.digest("SHA-256", encoder.encode(right)),
  ]);
  const a = new Uint8Array(leftHash);
  const b = new Uint8Array(rightHash);
  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) mismatch |= a[i] ^ b[i];
  return mismatch === 0;
};

const sessionKey = (secret: string) => crypto.subtle.importKey(
  "raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]
);

const toBase64Url = (bytes: Uint8Array) => {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
};

const fromBase64Url = (value: string) => {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(base64 + "=".repeat((4 - base64.length % 4) % 4));
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
};

const createSession = async (secret: string) => {
  const expires = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const payload = `v1.${expires}`;
  const signature = await crypto.subtle.sign("HMAC", await sessionKey(secret), encoder.encode(payload));
  return `${payload}.${toBase64Url(new Uint8Array(signature))}`;
};

const verifySession = async (token: string, secret: string) => {
  const parts = token.split(".");
  if (parts.length !== 3 || parts[0] !== "v1" || !/^\d+$/.test(parts[1])) return false;
  const expires = Number(parts[1]);
  const now = Math.floor(Date.now() / 1000);
  if (expires < now || expires > now + SESSION_SECONDS + 60) return false;
  try {
    return await crypto.subtle.verify("HMAC", await sessionKey(secret), fromBase64Url(parts[2]), encoder.encode(`${parts[0]}.${parts[1]}`));
  } catch {
    return false;
  }
};

const cookieValue = (header: string, name: string) => {
  for (const item of header.split(";")) {
    const separator = item.indexOf("=");
    if (separator >= 0 && item.slice(0, separator).trim() === name) return item.slice(separator + 1).trim();
  }
  return "";
};

const formatDate = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return display(value);
  return escapeHtml(new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai", year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", hour12: false,
  }).format(date));
};

const renderLead = (lead: LeadRow) => {
  const tracking = [lead.utm_source, lead.utm_medium, lead.utm_campaign].filter(Boolean).join(" / ");
  return `<article class="lead"><div class="lead-head"><h2>${display(lead.name)}</h2>
    <span class="muted">#${escapeHtml(lead.id)} · ${formatDate(lead.created_at)}（北京时间）</span></div>
    <div class="details">
      <div class="field"><span class="label">邮箱</span><div class="value">${display(lead.email)}</div></div>
      <div class="field"><span class="label">电话</span><div class="value">${display(lead.phone)}</div></div>
      <div class="field"><span class="label">公司</span><div class="value">${display(lead.company)}</div></div>
      <div class="field"><span class="label">国家</span><div class="value">${display(lead.country)}</div></div>
      <div class="field wide"><span class="label">留言</span><div class="message">${display(lead.message)}</div></div>
      <div class="field wide"><span class="label">提交页面</span><div class="value">${display(lead.page_url)}</div></div>
      ${tracking ? `<div class="field wide"><span class="label">推广来源</span><div class="value">${display(tracking)}</div></div>` : ""}
    </div></article>`;
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.ADMIN_KEY || env.ADMIN_KEY.length < 24) {
    return new Response("管理员密码尚未配置。", { status: 503, headers: securityHeaders("text/plain; charset=utf-8") });
  }
  let form: FormData;
  try { form = await request.formData(); } catch { return loginResponse("请求格式无效。", 400); }
  if (form.get("action") === "logout") {
    const headers = securityHeaders();
    headers.set("Location", "/admin/leads");
    headers.set("Set-Cookie", `${COOKIE_NAME}=; Path=/admin/leads; HttpOnly; Secure; SameSite=Strict; Max-Age=0`);
    return new Response(null, { status: 303, headers });
  }
  if (form.get("action") !== "login") return loginResponse("请求无效。", 400);
  const submitted = String(form.get("adminKey") ?? "");
  if (!submitted || submitted.length > 512 || !(await constantTimeEqual(submitted, env.ADMIN_KEY))) {
    return loginResponse("密码不正确。", 401);
  }
  const headers = securityHeaders();
  headers.set("Location", "/admin/leads");
  headers.set("Set-Cookie", `${COOKIE_NAME}=${await createSession(env.ADMIN_KEY)}; Path=/admin/leads; HttpOnly; Secure; SameSite=Strict; Max-Age=${SESSION_SECONDS}`);
  return new Response(null, { status: 303, headers });
};

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.ADMIN_KEY || env.ADMIN_KEY.length < 24) {
    return new Response("管理员密码尚未配置。", { status: 503, headers: securityHeaders("text/plain; charset=utf-8") });
  }
  const token = cookieValue(request.headers.get("Cookie") ?? "", COOKIE_NAME);
  if (!token || !(await verifySession(token, env.ADMIN_KEY))) return loginResponse();

  try {
    const totalRow = await env.DB.prepare("SELECT COUNT(*) AS total FROM leads").first<{ total: number }>();
    const total = Number(totalRow?.total ?? 0);
    const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));
    const rawPage = new URL(request.url).searchParams.get("page") ?? "1";
    const requestedPage = /^\d{1,5}$/.test(rawPage) ? Number(rawPage) : 1;
    const currentPage = Math.min(Math.max(requestedPage, 1), pageCount);
    const rows = await env.DB.prepare(`
      SELECT id, created_at, name, email, phone, company, country, message, page_url,
             utm_source, utm_medium, utm_campaign
      FROM leads ORDER BY created_at DESC, id DESC LIMIT ? OFFSET ?
    `).bind(PAGE_SIZE, (currentPage - 1) * PAGE_SIZE).all<LeadRow>();
    const previous = currentPage > 1 ? `<a href="/admin/leads?page=${currentPage - 1}">上一页</a>` : "";
    const next = currentPage < pageCount ? `<a href="/admin/leads?page=${currentPage + 1}">下一页</a>` : "";
    const pagination = `<nav class="pagination" aria-label="询盘分页">${previous}<span>第 ${currentPage} / ${pageCount} 页</span>${next}</nav>`;
    const content = `<header class="top"><div><h1>ASRS 询盘</h1>
      <p class="muted">共 ${total} 条，按提交时间从新到旧显示。每页 ${PAGE_SIZE} 条。</p></div>
      <form method="post" action="/admin/leads"><input type="hidden" name="action" value="logout"><button type="submit">退出登录</button></form></header>
      ${total ? pagination + (rows.results ?? []).map(renderLead).join("") + pagination : "<p>暂无询盘。</p>"}`;
    return new Response(page("查看询盘", content), { headers: securityHeaders() });
  } catch (error) {
    console.error("Failed to load ASRS leads:", error);
    return new Response("读取询盘失败，请稍后重试。", { status: 500, headers: securityHeaders("text/plain; charset=utf-8") });
  }
};
