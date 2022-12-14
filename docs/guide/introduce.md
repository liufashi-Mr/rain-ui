---
title: 介绍
order: 0
nav:
  title: 指南
  path: /guide
---

# rain-ui

`rain-ui` 是一套轻量级，高度可定制化的 React UI 组件库，主要用于研发企业级中后台产品。

## 特性

- 🌈 提炼自企业级中后台产品的交互语言和视觉风格。
- 📦 开箱即用的高质量 React 组件。
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件。
- ⚙️ 全链路开发和设计工具体系。
- 🎨 深入每个细节的主题高度定制化。

## 兼容环境

- 现代浏览器和 IE11（需要 polyfills）。
- Electron
- 支持服务端渲染。

对于 IE 系列浏览器，需要提供相应的 Polyfill 支持，建议使用 @babel/preset-env 来解决浏览器兼容问题。如果你在使用 umi，可以直接使用 targets 配置。

## 模块支持

`rain-ui` 支持 esm、umd 两种模块支持，我们在[下载](./getting-start.md) `rain-ui` npm 包之后，会通过你的使用方式来将指定模块的包引入，`rain-ui` 采用 TypeScript 编写，提供完整的`typescript`类型，在引用时自动识别，无需特殊处理。在使用`ES Module`时将自动引入 esm 下的文件，支持 tree shaking 减少项目体积，在服务端使用时将自动引入 umd 下的文件，同事 umd 模块也支持 script 的当时引入
