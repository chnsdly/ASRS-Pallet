// functions/api/lead.ts

type Env = {
  DB: D1Database;
  TURNSTILE_SECRET: string;
  N8N_WEBHOOK_URL?: string;
};

type TurnstileVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

// 读取并清洗表单文本字段
const readText = (form: FormData, key: string) =>
  String(form.get(key) ?? "").trim();

// 基础邮箱校验：不过度严格，避免误伤正常用户
const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

// 服务端校验 Turnstile token
const verifyTurnstile = async (
  token: string,
  ip: string,
  secret: string
): Promise<boolean> => {
  if (!token) return false;

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: new URLSearchParams({
        secret,
        response: token,
        remoteip: ip,
      }),
    }
  );

  const result = (await response.json()) as TurnstileVerifyResponse;
  return Boolean(result.success);
};

// 推送到 n8n：失败只记日志，不影响用户提交体验
const sendToN8n = async (url: string, payload: unknown) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("n8n webhook returned non-2xx:", response.status, text);
    }
  } catch (error) {
    console.error("Failed to send lead to n8n:", error);
  }
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env, waitUntil }) => {
  try {
    const form = await request.formData();

    // 1) 蜜罐校验：有值就静默吞掉，避免给机器人明确反馈
    if (readText(form, "website")) {
      return new Response("ok", { status: 200 });
    }

    // 2) Turnstile 服务端校验：前端拿 token，后端必须再验一次
    const turnstileToken = readText(form, "cf-turnstile-response");
    const ip = request.headers.get("CF-Connecting-IP") || "";
    const turnstilePassed = await verifyTurnstile(
      turnstileToken,
      ip,
      env.TURNSTILE_SECRET
    );

    if (!turnstilePassed) {
      return new Response("Bot check failed", { status: 400 });
    }

    // 3) 读取表单字段
    const createdAt = new Date().toISOString();
    const name = readText(form, "name");
    const email = readText(form, "email");
    const company = readText(form, "company");
    const country = readText(form, "country");
    const phone = readText(form, "phone");
    const message = readText(form, "message");

    // page_url 优先取隐藏字段，缺失时再用 Referer 兜底
    const pageUrl = readText(form, "page_url") || request.headers.get("Referer") || "";

    // UTM 参数
    const utmSource = readText(form, "utm_source");
    const utmMedium = readText(form, "utm_medium");
    const utmCampaign = readText(form, "utm_campaign");
    const utmTerm = readText(form, "utm_term");
    const utmContent = readText(form, "utm_content");

    // 请求信息
    const userAgent = request.headers.get("User-Agent") || "";

    // 4) 服务端基础校验：前端校验不能代替后端校验
    if (!name || !email || !country || !phone) {
      return new Response("Missing required fields", { status: 400 });
    }

    if (!isValidEmail(email)) {
      return new Response("Invalid email address", { status: 400 });
    }

    // 5) 统一线索数据：数据库和 n8n 复用同一份结构
    const leadPayload = {
      name,
      email,
      phone,
      company,
      country,
      message,
      pageUrl,
      createdAt,
      ip,
      userAgent,
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      utm_term: utmTerm,
      utm_content: utmContent,
    };

    // 6) 写入 D1 数据库
    await env.DB.prepare(`
      INSERT INTO leads (
        created_at,
        name,
        email,
        phone,
        company,
        country,
        message,
        page_url,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_term,
        utm_content,
        ip,
        user_agent
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
      .bind(
        createdAt,
        name,
        email,
        phone,
        company,
        country,
        message,
        pageUrl,
        utmSource,
        utmMedium,
        utmCampaign,
        utmTerm,
        utmContent,
        ip,
        userAgent
      )
      .run();

    // 7) 异步推送到 n8n：不阻塞用户跳转
    if (env.N8N_WEBHOOK_URL) {
      waitUntil(sendToN8n(env.N8N_WEBHOOK_URL, leadPayload));
    }

    // 8) 提交成功后跳转感谢页
    return new Response(null, {
      status: 303,
      headers: {
        Location: new URL(pageUrl.includes("/zh/") ? "/zh/thanks/" : "/thanks/", request.url).toString(),
      },
    });
  } catch (error) {
    // 9) 兜底错误处理：记录日志，并返回通用错误
    console.error("Lead form request failed:", error);

    return new Response("Server error", {
      status: 500,
    });
  }
};
