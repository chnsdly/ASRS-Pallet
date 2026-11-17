# 2026-11-17 空托盘库接口：本地执行记录

## 决定与查重

在本地英中输送线与穿梭车接口指南中增加空托盘库的拆垛、夹持及出盘交接检查，并同步两语接口记录表，不创建重复页面。实读了本站中英文接口指南、样品验收指南和配套接口表：已有输送交接、样品测试和隔离要求，但未明确空托盘垛夹持、逐块分离、垛高及整垛质量。对比候选的载荷、尺寸和防滑问题后，本轮选择这一缺口；不能由搜索结果推断需求规模。宝恒综合站已有拆垛兼容指南，本轮聚焦立体库路线和站内既有工位记录，不复制其产品示例或另造同意图长文。

上轮识别内容和其他未提交工作均予以保留。当前远端 main 由 GitHub 连接器读取为 `7786a94019d9605d3bf2718e550b353df20cfe9a`，与本地 HEAD 和本地缓存 origin/main 一致。

## 本地文件和预期地址

- 英文：`content/en/resources/insights/specify-pallet-for-conveyors-shuttles.md`；预期 `/resources/insights/specify-pallet-for-conveyors-shuttles/`。
- 中文：`content/zh/resources/insights/specify-pallet-for-conveyors-shuttles.md`；预期 `/zh/resources/insights/specify-pallet-for-conveyors-shuttles/`。
- 配套表：`static/downloads/asrs-pallet-interface-record-en.txt` 和 `static/downloads/asrs-pallet-interface-record-zh.txt`。当前 Hugo 配置启用英文和中文，两种语言均已更新；没有新增图片。

## 依据与边界

- [GEBHARDT — Stacker / destacker](https://us.gebhardt-group.com/index.php/products/conveying-transporting-sorting/pallet-conveyor-technology/stacking-and-storing/stacker-destacker.html)：说明其空托盘库用于立体库前缓冲等场景，不证明任何宝恒托盘已适配设备。
- [Alba Manufacturing — pallet dispenser case study](https://www.albamfg.com/wp-content/pdf/Alba-Manufacturing-Case-Study-10042021.pdf)，第 2 页：介绍特定设备通过夹持、升降和链条输送完成单盘输出；不将该结构或其参数推广到所有设备。
- 2026-11-17 实读上述资料。堆垛、夹持、放行和测试要求均按设备与项目确认；不新增托盘性能、客户业绩或设备兼容承诺。混垛仅在已批准运行方案包含时测试，空盘测试不证明带载工况。
- 英文采用设备厂商使用的 stacker/destacker 和 empty-pallet magazine 表述，中文以对应使用场景本地化。

## 本地验证

- Hugo Extended 0.158.0 在独立输出、缓存和资源目录中生产构建成功：英文 101 页、中文 99 页。修正中文项目符号中的 Markdown 显示问题后，已对最终内容重新构建和验证。
- 本地 Chrome 离线核验双语新增正文、标题、描述、canonical、hreflang、robots、sitemap、图片、各 9 个唯一站内链接、各语下载表及结构化数据；1440 px 和 375 px 视口无页面横向溢出，无页面脚本错误。检查了修正后的中文手机截图。
- `git diff --check` 通过；部分工作区文件存在 Git 提示的 LF/CRLF 换行转换提示。
- 检查直接读取本地构建产物，不代表线上 HTTP、收录或发布状态；表单收件未测试。

成果仅保存在本地，未提交、推送、合并、部署或发布。无新增阻塞；最终夹持位置、单盘出库标准和项目测试方案由设备及项目责任方确认。
