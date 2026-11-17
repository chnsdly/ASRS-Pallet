# 2026-11-15 套托方案比较：本地执行记录

## 处理决定

本轮复查既有覆盖后，在现有木托盘替换指南中补充直接替换与套托两种路线的比较，不另建重复页面。冷库指南已覆盖温度、设备接口及样品验证等关键问题，本轮没有重复撰写。保留此前未提交的内容和素材。

- 英文：`content/en/resources/customer-cases/wood-to-plastic-asrs-retrofit.md`
- 中文：`content/zh/resources/customer-cases/wood-to-plastic-asrs-retrofit.md`
- Hugo 当前启用英文和中文，两个版本均已更新；未新增图片或下载素材。

新增内容比较接触与支撑、包括双层托盘在内的整体尺寸与质量、回流和操作责任，以及实际组合的验证。重心、感应、净空和承载条件需结合项目及设备确认；不能据此认定任一宝恒型号适合作为套托，也不能默认所有来料托盘均可使用。

## 依据

2026-11-15 查阅 [Interlake Mecalux 的 Charter Next Generation 项目案例](https://www.interlakemecalux.com/case-studies/automated-warehouse-charter-next-generation-blown)：该项目将来料托盘置于受控载托上进入自动化系统，并在出库时分离、回用载托。文章清楚标明这是系统集成商的案例，而非宝恒客户项目或产品适用性证明。另查阅 [LEWCO 输送系统资料](https://conveyors.lewcoinc.com/heavy-loads-light-work-the-future-of-pallet-conveying/) 及 [System Logistics SANDALO 资料](https://www.systemlogistics.com/media/125/d-1/t-file/SYSTEM-1.pdf)，作为自动化托盘处理及套托应用的补充背景；具体设计仍须由项目各方确认。

## 本地验证

- GitHub 连接器读取的 `origin/main` 对应远端 main 提交为 `7786a94019d9605d3bf2718e550b353df20cfe9a`，与本地 HEAD 和本地记录的 origin/main 一致；本轮未改写分支。
- Hugo Extended 0.158.0 生产构建成功：英文 101 页、中文 99 页；独立输出和缓存位于本地 visualizations 目录。
- 使用本地构建产物及 Chrome 分别检查中英文页面：标题、描述、canonical、双语 hreflang、robots、sitemap、来源链接、图片及 alt、各 5 个唯一站内链接均通过；1440 像素和 375 像素视口无页面横向溢出，未发现页面脚本错误。桌面截图与手机截图已生成供检查。
- `git diff --check` 通过；Git 提示工作区文件可能发生 LF/CRLF 换行转换。
- 页面地址和 SEO 元数据仅对本地构建核验，未验证线上发布状态。

本轮成果仅保存在本地，未提交、推送、合并、部署或发布。
