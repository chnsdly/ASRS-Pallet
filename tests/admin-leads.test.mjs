import assert from "node:assert/strict";
import test from "node:test";
import { onRequestGet, onRequestPost } from "../functions/admin/leads.ts";

const url = "https://www.baohengasrs.com/admin/leads";
const adminKey = "correct-horse-battery-staple-2026";
const lead = {
  id: 1,
  created_at: "2026-10-21T04:00:00.000Z",
  name: "<script>alert(1)</script>",
  email: "customer@example.com",
  phone: "+86 123456789",
  company: "Example Co",
  country: "China",
  message: "Need 100 pallets",
  page_url: "https://example.com/contact",
  utm_source: null,
  utm_medium: null,
  utm_campaign: null,
};

const db = {
  prepare(sql) {
    if (sql.includes("COUNT(*)")) return { first: async () => ({ total: 1 }) };
    return { bind: () => ({ all: async () => ({ results: [lead] }) }) };
  },
};

const env = { ADMIN_KEY: adminKey, DB: db };
const get = (cookie = "", environment = env) => onRequestGet({
  request: new Request(url, { headers: cookie ? { Cookie: cookie } : {} }), env: environment,
});
const post = (fields, cookie = "", environment = env) => onRequestPost({
  request: new Request(url, {
    method: "POST", headers: cookie ? { Cookie: cookie } : {}, body: new URLSearchParams(fields),
  }), env: environment,
});

test("admin page fails closed without a configured password", async () => {
  const response = await get("", { ...env, ADMIN_KEY: "" });
  assert.equal(response.status, 503);
});

test("unauthenticated and incorrect-password requests never reveal leads", async () => {
  for (const response of [await get(), await post({ action: "login", adminKey: "incorrect" })]) {
    assert.equal(response.status, 401);
    assert.doesNotMatch(await response.text(), /customer@example\.com/);
    assert.equal(response.headers.get("Cache-Control"), "no-store");
  }
});

test("successful login opens read-only escaped leads and logout clears session", async () => {
  const login = await post({ action: "login", adminKey });
  assert.equal(login.status, 303);
  const setCookie = login.headers.get("Set-Cookie");
  assert.match(setCookie, /HttpOnly; Secure; SameSite=Strict/);
  const cookie = setCookie.split(";")[0];
  const response = await get(cookie);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /customer@example\.com/);
  assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
  assert.doesNotMatch(html, /<script>alert\(1\)<\/script>/);
  const tampered = await get(`${cookie}changed`);
  assert.equal(tampered.status, 401);
  const logout = await post({ action: "logout" }, cookie);
  assert.equal(logout.status, 303);
  assert.match(logout.headers.get("Set-Cookie"), /Max-Age=0/);
});
