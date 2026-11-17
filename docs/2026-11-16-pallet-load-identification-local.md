# 2026-11-16 托盘与货载识别：本地执行记录

## 处理决定与查重

买家需要确认的是：整托货物经过自动化识别工位时，系统读取的是可复用托盘编号还是当前货载编号，两者如何关联，以及缠膜后的实际读取结果如何核对。识别成功但关联错误，仍需按现场流程处理。

本轮实读站内中英文缠膜、传感器、托盘检查和清洁场景文章。现有缠膜指南已覆盖识别位置与薄膜，但没有展开托盘和货载身份的区别；传感器指南主要处理光电到位检测。因此在缠膜指南增加一节，并同步其下载表，不另建重复指南。清洁结构场景已有相应讨论，本轮不重复撰写。综合站已有追溯文章仅作查重线索，不将其业务承诺作为本项目依据。

## 交付文件与预期地址

- 英文：`content/en/resources/insights/asrs-pallet-stretch-wrap-clearance.md`；预期 `/resources/insights/asrs-pallet-stretch-wrap-clearance/`。
- 中文：`content/zh/resources/insights/asrs-pallet-stretch-wrap-clearance.md`；预期 `/zh/resources/insights/asrs-pallet-stretch-wrap-clearance/`。
- 配套记录：`static/downloads/asrs-pallet-stretch-wrap-checklist-en.txt`、`static/downloads/asrs-pallet-stretch-wrap-checklist-zh.txt`。
- 当前 Hugo 配置启用英文与中文，两个正文和表格均已同步。未新增媒体。

## 依据与边界

- [GS1 Sweden，Rules and recommendations](https://gs1.se/en/guides/how-to-guides/labeling-the-pallet/rules-and-recommendations/)：SSCC 识别物流单元；页面包含适用于瑞典市场的具体说明。本次仅引用身份对象，不把其位置数字或地区规则推广为所有项目的统一要求。
- [Balluff，RFID Gates in Factory Logistics](https://www.balluff.com/en-sg/document/doc-19917678)，版本 2.0，2026-08-25：第 7 节讨论可复用载具在空载和带载下的不同读取条件，第 8 至 9 节讨论读取与系统事件、意外读取处理。此资料不证明宝恒任何型号配有 RFID，也不代替设备商验收。
- 上述资料于 2026-11-16 实读。中英文均要求项目方确认编号关联、标签位置、实际读取结果与异常处理；不指定通用读取率、安装位置或产品能力。

## 实际验证

- GitHub 连接器读取远端 main 为 `7786a94019d9605d3bf2718e550b353df20cfe9a`，与本地 HEAD 和缓存 origin/main 一致；此前未提交成果保留。
- Hugo Extended 0.158.0 使用独立缓存、生成资源和输出目录，生产构建通过：英文 101 页、中文 99 页。首次构建创建 `footer/index.html` 时遇到访问拒绝；在相同隔离输出目录重试后成功，未改动网站配置。
- 对最终本地构建进行离线 Chrome 核验：中英文正文新增内容、标题和描述、canonical、双向 hreflang、robots、sitemap、图片、各 7 个唯一站内链接和各语下载表均通过；结构化数据标题、描述、语言、地址和修改日期与页面一致。1440 px 与 375 px 视口无横向溢出，未发现页面脚本错误；查看了中文手机截图。图片为延迟加载，检查时先滚动并解码后核验。
- `git diff --check` 通过；Git 仅提示部分工作区文件未来可能由 LF 转为 CRLF。
- 浏览器直接读取独立本地构建，不代表线上 HTTP、收录或发布验证。

本轮成果仅保存在本地，未提交、推送、合并、部署或发布。无新增阻塞；标签选型、数据关联及项目验收条件仍需实际项目相关方确认。
