const readText = (form, key) => String(form.get(key) ?? "").trim();
const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

async function verifyTurnstile(token, ip, secret) {
  if (!token || !secret) return false;
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: new URLSearchParams({ secret, response: token, remoteip: ip }),
  });
  const result = await response.json();
  return Boolean(result.success);
}

async function sendToWebhook(url, payload) {
  if (!url) return;
  try {
    await fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
  } catch (error) {
    console.error("Lead webhook failed", error);
  }
}

async function handleLead(request, env, ctx) {
  const form = await request.formData();
  if (readText(form, "website")) return new Response("ok");

  const ip = request.headers.get("CF-Connecting-IP") || "";
  const token = readText(form, "cf-turnstile-response");
  if (!(await verifyTurnstile(token, ip, env.TURNSTILE_SECRET))) {
    return new Response("Bot check failed", { status: 400 });
  }

  const payload = {
    createdAt: new Date().toISOString(),
    name: readText(form, "name"),
    email: readText(form, "email"),
    company: readText(form, "company"),
    country: readText(form, "country"),
    phone: readText(form, "phone"),
    message: readText(form, "message"),
    pageUrl: readText(form, "page_url") || request.headers.get("Referer") || "",
    ip,
    userAgent: request.headers.get("User-Agent") || "",
    utm_source: readText(form, "utm_source"),
    utm_medium: readText(form, "utm_medium"),
    utm_campaign: readText(form, "utm_campaign"),
    utm_term: readText(form, "utm_term"),
    utm_content: readText(form, "utm_content"),
  };

  if (!payload.name || !payload.email || !payload.country || !payload.phone) return new Response("Missing required fields", { status: 400 });
  if (!isValidEmail(payload.email)) return new Response("Invalid email", { status: 400 });

  await env.DB.prepare(`INSERT INTO leads (created_at,name,email,phone,company,country,message,page_url,utm_source,utm_medium,utm_campaign,utm_term,utm_content,ip,user_agent) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`)
    .bind(payload.createdAt,payload.name,payload.email,payload.phone,payload.company,payload.country,payload.message,payload.pageUrl,payload.utm_source,payload.utm_medium,payload.utm_campaign,payload.utm_term,payload.utm_content,payload.ip,payload.userAgent).run();

  if (env.N8N_WEBHOOK_URL) ctx.waitUntil(sendToWebhook(env.N8N_WEBHOOK_URL, payload));
  const thanks = payload.pageUrl.includes("/zh/") ? "/zh/thanks/" : "/thanks/";
  return Response.redirect(new URL(thanks, request.url), 303);
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/api/lead" && request.method === "POST") {
      try { return await handleLead(request, env, ctx); }
      catch (error) { console.error("Lead submission failed", error); return new Response("Server error", { status: 500 }); }
    }
    return env.ASSETS.fetch(request);
  },
};