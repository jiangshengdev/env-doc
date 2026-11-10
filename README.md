# Env Doc

本项目重新使用官方 `create-docusaurus@latest` 创建 Classic TypeScript 模板。没有复用上一轮重建项目。

## 提交顺序

1. 官方脚手架生成后，立即提交未经修改的40个模板文件。
2. 原始模板提交：`1d5a63d5d4b153553e29e2f2ac34031897478b94`。
3. 作者及提交者均为 `Jiang Sheng <jiangshengdev@outlook.com>`。
4. 之后才更新直接依赖、迁移文章和配置。
5. 原始模板提交保留在独立模板仓库及交付归档中，不将其独立历史合并到本仓库。
6. 本仓库保留旧 Git 历史：先提交删除旧项目文件（`cfdc3cf67bd5aba9214329595f16bd38e8780dfd`），再单独提交新模板及迁移文件。

内容来源：`jiangshengdev/env-doc` 的 main 提交 `bca9a1afa47a11c72574b4b249e7b5606bccf72e`。

## 使用

本次使用 Node.js 24.22.1、npm 11.9.0 验证。

```sh
npm ci
npm start
```

```sh
npm run check
npm run serve
```

`check` 依次执行类型检查、格式检查和生产构建。

## 迁移范围

- 7篇文章、53张文章图片、2个分类保持原始内容。
- 保留原13个页面路径、56个标题锚点、首页入口、品牌图片、中文语言和生产域名。
- 保留现有 Algolia 搜索配置及 PWA manifest、9个图标和离线策略。
- 移除模板示例内容。文章没有数学公式，未引入旧的数学插件和静态 KaTeX 文件。
- 16个直接依赖采用查询时的 npm latest。当前 Docusaurus / create-docusaurus latest 均为3.10.2。
- 未设置 dependency overrides，未强制更新间接依赖，正常保留上游约束。
- TypeScript latest 7.0.2 已移除 baseUrl，因此清除继承的旧配置并显式保留 @site 路径映射。

## 发布边界

本次代码迁移不执行部署命令。此前回收的文件及独立模板仓库保留不动。
