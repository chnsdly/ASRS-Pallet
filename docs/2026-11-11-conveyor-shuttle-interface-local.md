# 输送线与穿梭车接口指南：本地修订与验证记录

执行日期：2026-11-11（Asia/Shanghai）。计划任务：`seo-6`。

交付状态：**本地已完成，未提交、未推送、未部署、未发布**。保留原 URL 与原始发布日期；发布需要另外明确授权。原有 `.gitignore` 修改保留，未纳入本轮内容修改。

## 承接决定与查重范围

目标买家是正在选型或替换托盘的仓库项目人员与自动化集成商。要完成的决定是：怎样把托盘底面、运行方向、设备支撑及取货动作整理为双方能评审的接口资料，再安排代表性试样。

本轮实读本地英文资源正文：选型总指南、完整货载尺寸、样品验收、输送线/穿梭车接口、钢管加强、货架载荷、混合输送底型场景及旧版田字底混合线场景；实读中文接口页，并检索双语资源与全部现有文本下载中的滚筒间距、链道中心、移载和接口记录。另核对 BH1210 Grid 3-Runner、Grid Full-Perimeter 系列资料、双语配置和文章模板。此范围是本题查重范围，不代表逐页审阅了全站所有正文。

比较结果：

- 货载尺寸页已经具体解释外形、超边、质量和接触分布，无需再建近似页面。
- 样品验收页已覆盖总体试样流程；另建一篇相似流程文章会重复。
- 底型应用场景已有川字/田字取舍，但核心接口指南较短，缺少尺寸定义和逐工位记录。优先在原接口指南补足，保留场景页的分工。
- 货架载荷和加强指南也有深化空间，但本轮只推进接口问题，不为每日频率同时扩写多个主题。

原有 RFQ 和样品清单分别是总需求、总验收记录；本轮配套表按工位填写支撑位置、进出姿态、取货路径、标准来源与待办，作为原文的具体执行资料。没有创建新文章 URL，没有推断搜索量、排名或询盘收益。

## 主线与工作区依据

- 仓库：`chnsdly/ASRS-Pallet`，本地分支 `main`。
- 本地 HEAD 与原有 `origin/main` 均为 `7786a94019d9605d3bf2718e550b353df20cfe9a`。
- 本次 `git fetch origin` 无法写入 `.git/FETCH_HEAD`；SSH 的只读远端查询也因本地运行限制失败。因此改用已连接的 GitHub 工具读取当前 `main` 提交，并读取远端英文接口页，确认当前远端主线仍为上述 SHA，且目标正文与修改前本地版本一致。没有把旧的本地远端引用当作新鲜远端证明，也没有进行分支同步或合并。
- 任务开始时唯一已有的可见修改为 `.gitignore`，未发现上轮待处理的文章或素材。

## 交付文件与预期地址

| 语言/用途 | 本地文件 | 预期正式地址（本轮未发布核验） |
| --- | --- | --- |
| 英文指南 | `content/en/resources/insights/specify-pallet-for-conveyors-shuttles.md` | `https://www.baohengasrs.com/resources/insights/specify-pallet-for-conveyors-shuttles/` |
| 中文指南 | `content/zh/resources/insights/specify-pallet-for-conveyors-shuttles.md` | `https://www.baohengasrs.com/zh/resources/insights/specify-pallet-for-conveyors-shuttles/` |
| 英文接口表 | `static/downloads/asrs-pallet-interface-record-en.txt` | `/downloads/asrs-pallet-interface-record-en.txt` |
| 中文接口表 | `static/downloads/asrs-pallet-interface-record-zh.txt` | `/downloads/asrs-pallet-interface-record-zh.txt` |

两种语言完整覆盖本次 Hugo 配置启用的 `en`、`zh`。共用唯一 `translationKey`，原始 `date: 2026-07-12` 保留，实质修订的 `lastmod` 为 `2026-11-11T12:00:00+08:00`。双语一致处理参考边 A、工位 T1、90° 换向、链道中心距与链节节距、滚筒中心距与净空，以及空载/带载的适用范围。

## 关键依据与边界

本轮实际打开并阅读下列原始发布者页面的相关正文，核对日期均为 2026-11-11：

| 主张/用途 | 来源与具体位置 | 适用范围 |
| --- | --- | --- |
| 设备可能设有专门的 90° 换向模块，路线中需要标明 | [Interroll PM 9730](https://www.interroll.com/products/mpp/pm-9730)，产品名称下方的功能描述及 CAD 信息 | 只作该模块的功能示例，不表明任何宝恒型号获设备认证或兼容批准 |
| 需要识别实际移载与转台机构，而非只记录工位名称 | [Mecalux Pallet Conveyor Systems](https://www.mecalux.com/warehouse-automation/pallet-conveyor)，Components 中 roller/chain transfer、turntable、mixed turntable 条目 | 仅说明设备类型有区别；项目动作、支撑与姿态以所用设备图纸为准 |
| 进入设备区域进行维护/调整需采用相应计划与隔离程序 | [HSE Maintenance of work equipment](https://www.hse.gov.uk/work-equipment-machinery/maintenance.htm)，How you can maintain equipment safely / Safe isolation | 英国监管机构的维护指导，不据此声称其他法域的具体强制要求或项目测试标准 |

工位字段、参考边方法及评审顺序为编辑整理的询价/评审建议，不是引用的统一验收规程。没有新增载荷、通用滚筒数量、间隙阈值、公差、传感器设置、测试数量/周期、认证、客户案例或节省比例。实际支持判定、取货间隙、测试工况与放行标准仍需设备方和项目责任方确认；这是资料表的待填项，不阻塞条件化指南本身的本地完成。

现有封面 `static/images/resources/insights/conveyor-shuttle-pallet-interface.webp` 的生成来源见 `docs/generated-image-prompts.md`。本轮实际查看成品，沿用该 AI 示意图并新增双语图注披露；不称为宝恒测试、客户现场或型号工程图。没有生成新图片，也没有改产品规格、全站模板、索引政策或后台。

## 本地验证结果

- Hugo Extended `v0.158.0` 的完整生产构建通过，输出 EN 101 页、ZH 99 页；独立输出、缓存与生成资源均位于站点目录外。本次构建未报告内容/路径错误。
- 双语生成页面的标题、description、完整正文、章节、封面及图注已检查。每种语言 9 个不同的正文内链/下载目标均在构建目录存在；中文页面的正文站内页链接均指向 `/zh/`，共用下载保持无语言前缀。
- 两种语言的 canonical、相互对应的 `en-US` / `zh-CN` hreflang、默认可索引 robots、sitemap 收录与 BlogPosting JSON-LD 检查通过。结构化标题、摘要、语言、组织作者、原发布日期与本次修订日期均与源文件和可见内容相符。
- 1440 px 桌面及 375 px 手机宽度的本地浏览器检查通过，并实际查看了两种语言的桌面截图和手机表格截图。页面没有整体横向溢出；手机表格使用现有组件的独立横向滚动，允许查看全部列；图片加载成功，页面无脚本错误。
- 浏览器使用构建目录文件的离线路由呈现。常规 localhost 访问被环境限制，因此未把这些检查称为实际 HTTP 托管验收、后台收件测试或正式网站核验；没有提交测试表单或发送外部消息。
- `git diff --check` 通过；Git 仅提示本机 LF/CRLF 换行转换，不是内容错误。本轮没有创建提交，HEAD 不变。

独立验证目录：`C:/Users/chnsd/.codex/visualizations/2026/11/10/01a1c61d-9a4b-7211-a6d0-6f579f456844/2026-11-11-seo-6/`。其中保存 `validation.json`、双语桌面/手机截图与构建结果。当前没有影响本地成稿的未解决阻塞；正式发布及线上验收尚未执行，不属于本计划任务授权范围。
