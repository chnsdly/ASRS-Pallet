# ASRS-Pallet 独立 D1 配置路线

此清单只针对 ASRS-Pallet。不要选择、修改或导入 Plastic-Pallets 的数据库。

1. 在 Cloudflare `Workers & Pages` 中确认 ASRS 对应的 Pages 项目和账号。
2. 在同一账号创建独立 D1，建议命名 `asrs-pallet-leads-prod`。
3. 在新 D1 的 Console 执行 `migrations/0001_create_leads.sql`，确认 `leads` 表出现。
4. 在 ASRS Pages 项目的 Production 环境添加 D1 绑定：变量名必须为 `DB`，目标为新 D1；重新部署后生效。Preview 环境如要测试，另行绑定测试数据库。
5. 为 `baohengasrs.com` 配置独立 Turnstile widget。将公开的 sitekey 写入 `config/_default/params.toml`；把私密的 secret 仅存入 ASRS Pages 的 `TURNSTILE_SECRET` 变量。
6. 部署 ASRS 代码，检查 `/api/lead` 已作为 Pages Function 发布。
7. 在真实域名提交一条明确标记为测试的线索，确认跳转感谢页，并在 ASRS D1 查询到该行。测试后可删除该行。
8. 在 ASRS Pages 的 Production 环境添加加密密钥 `ADMIN_KEY`，值使用密码管理器生成的至少 24 位随机密码。不要把密码写进仓库或发送到聊天中。
9. 部署后访问 `https://www.baohengasrs.com/admin/leads`，输入管理员密码查看询盘。页面只读，每页 20 条，可翻页；登录会话有效 1 小时。

可选：`N8N_WEBHOOK_URL` 仅在需要自动通知时配置，不影响 D1 入库。
