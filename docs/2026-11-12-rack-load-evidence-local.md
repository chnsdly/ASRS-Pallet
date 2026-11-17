# 货架载荷指南：本地修订与验证记录

日期：2026-11-12（Asia/Shanghai）。计划任务：`seo-6`。

状态：**本地已完成，未提交、未推送、未部署、未发布**。本轮完善原有指南，不新增文章 URL，不修改产品载荷或站点模板。

## 本轮决定与已有成果

买家要解决的问题是：不同供应商的托盘承载数字能否用于同一上架工况，哪些条件或报告信息仍需补齐。原货架载荷指南只简述支撑、温度和完整配置，尚未提供逐项核对依据、判读报告或记录比较结论的办法。

本轮实读中英文货架指南与相应 FAQ，英文选型总指南、样品验收、钢增强指南，中英文长期上架应用场景，以及样品验收下载中的载荷评审字段；检索双语资源和现有下载中的相同问题。长期上架场景已有实例讨论，样品指南已有整体验收流程，故不另建同意图文章。本轮在原指南补足载荷口径、净跨度与中心距、报告适用范围和待确认动作，新增配套的候选方案评审表。

上轮接口指南和双语接口记录表已完成其本地交付，没有未完成的双语或构建项目需要接续。本轮保留它们及原记录，执行前后对这五个既有文件的 SHA-256 比较均一致。原有 `.gitignore` 修改保留。没有把“未发布”当作新的发布授权，也没有重复生成上轮成果。

## 项目与主线

- 当前仓库为 `chnsdly/ASRS-Pallet`，分支为 `main`，远端为 `origin`。
- 本地 HEAD 和已有 `origin/main` 为 `7786a94019d9605d3bf2718e550b353df20cfe9a`。
- 本轮通过已连接的 GitHub 工具读取当前远端 `main` 提交，确认仍为上述完整 SHA。使用这次远端读取核对新鲜度，没有将本地远端引用单独当成最新主线证明；没有执行 fetch 写入、分支整合、提交或推送。
- 本轮未发现适用的 `AGENTS.md`。完整读取当前本地内容提示词，并核对 `config/_default/hugo.toml` 的语言和地址配置。

## 文件与预期地址

| 交付 | 本地文件 | 预期正式地址（本轮未发布核验） |
| --- | --- | --- |
| 英文指南 | `content/en/resources/insights/rack-load-is-not-a-single-number.md` | `https://www.baohengasrs.com/resources/insights/rack-load-is-not-a-single-number/` |
| 中文指南 | `content/zh/resources/insights/rack-load-is-not-a-single-number.md` | `https://www.baohengasrs.com/zh/resources/insights/rack-load-is-not-a-single-number/` |
| 英文评审表 | `static/downloads/asrs-pallet-rack-load-review-en.txt` | `/downloads/asrs-pallet-rack-load-review-en.txt` |
| 中文评审表 | `static/downloads/asrs-pallet-rack-load-review-zh.txt` | `/downloads/asrs-pallet-rack-load-review-zh.txt` |

完整覆盖当前启用的 `en`、`zh`。原始发布日期 `2026-07-20` 保留，实质修订日期为 `2026-11-12T12:00:00+08:00`；双语使用相同唯一 `translationKey`。正文、下载表在载荷口径、支撑定义、标准版本、未知项处理及结论力度上保持一致。

## 依据、实读范围与限制

本轮实际打开下列原始发布者资料，核对日期均为 2026-11-12：

| 依据 | 实际读取位置 | 本文用途及边界 |
| --- | --- | --- |
| [ISO 8611-1:2025](https://www.iso.org/standard/87543.html) | ISO 目录页 Abstract、版本信息 | 确认试验方法分组和具体设计现场试验的作用；未读取完整标准，不复述程序或阈值 |
| [ISO 8611-2:2025](https://www.iso.org/standard/87544.html) | ISO 目录页 Abstract、版本信息 | 区分性能要求与测试选择的用途；不把目录标题当成某型号已测试的证明 |
| [ISO 8611-3:2011](https://www.iso.org/standard/50116.html) | ISO 目录页 Abstract、状态信息 | 已知有效载荷和不同搬运环境下的工作载荷确定；本次目录页仍标为有效，2022 年复核确认 |
| [HSE《托盘安全》PM15 第四版](https://www.hse.gov.uk/pubns/pm15.pdf) | PDF 第 2–3 页，Suitability / Pallet design considerations | 核对载荷分布、环境及货架形式为设计输入；不复制其特定货架示例中的尺寸为本站通用限值，也不将英国指导直接写成其他地区的强制要求 |

评审顺序、字段及三种资料评审结果为编辑建议，不是标准规定的验收流程。没有编造载荷换算比、折减系数、钢管增载比例、安全系数、通用挠度/间隙值、测试数量/时长、型号性能或客户试验。报告中的试样、支撑、环境、时长、测量和工作载荷结论仍应由相应责任方对应到具体用途，不能以“未断裂”或标准名称代替。

采用同一条件表并保留依据，预期可帮助买家向供应商提出可回应的问题；这是内容价值假设，没有流量、搜索量、排名、询盘或销售效果数据支持量化结论。用语沿用当前英文采购指南及 ISO 的标准名称，不声称已完成某一国家的关键词需求测量。

## 素材

沿用封面 `rack-load-support-span-testing.webp`，其 AI 来源记录见 `docs/generated-image-prompts.md`。本轮实际查看封面，新增双语图注说明其不是宝恒试验、批准支撑或额定载荷结果。复用既有 `pallet-interface-checks-en.svg` / `-zh.svg`，用于解释承载线、接触宽度和净跨度；实际查看了两种语言的渲染图，图注说明非型号图、非比例图和非额定支撑。未创建新图或改变素材文件。

## 验证

- 完整 Hugo Extended `v0.158.0` 生产构建通过，无内容/路径错误；输出 EN 101 页、ZH 99 页，静态文件每种语言 164 个。输出、缓存和生成资源使用站点外的独立目录。
- 双语正文、标题、摘要、章节、媒体、图注和下载检查通过。每种语言 8 个不同的正文站内链接/下载目标均存在，中文正文页面链接均指向 `/zh/`，共用图片及下载不误加语言前缀。
- canonical、双向 `en-US` / `zh-CN` hreflang、默认可索引 robots、sitemap 和 BlogPosting JSON-LD 检查通过。结构化标题、摘要、作者、语言、原发布日期和修订日期与源文件对应。
- 1440 px 桌面、375 px 手机宽度的离线浏览器检查通过。正文无整体横向溢出，两张表在手机宽度内可读；图片加载且替代文本非空，页面无脚本错误。实际查看了双语桌面、手机标准表、手机报告表和支撑示意图截图。
- 浏览器从构建文件离线呈现；这些结果不是公网 HTTP、后台收件或正式网站部署验收。没有提交表单、查询客户数据或向外发送消息。
- `git diff --check` 通过，只有本机 LF/CRLF 换行提示；HEAD 保持不变。没有修改或暂存上轮文件。

验证目录：`C:/Users/chnsd/.codex/visualizations/2026/11/10/01a1c61d-9a4b-7211-a6d0-6f579f456844/2026-11-12-seo-6/`，保存构建产物、`validation.json` 及截图。没有阻塞本地交付的未解决问题；型号允许载荷仍需项目证据，正式发布及上线核验尚未执行。
