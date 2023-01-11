---
title: Space 间距
group:
  title: 布局
  path: /layout
  order: 1
nav:
  path: /components
---

# Space 间距

设置组件之间的间距，避免组件紧贴在一起，拉开统一的空间。`Space` 如果用习惯了将会是一个会大量使用的组件，因为它非常方便，`rain-ui`文档的 demo 它的身影随处可见。

## 基本使用

### 水平间距

设置相邻组件水平间距。 <code src="./demo/base.tsx">

### 垂直布局

使用`direction=''vertical` 设置为垂直布局 <code src="./demo/vertical.tsx">

### 不同间距

设置不同的间距,`size`属性可以使用 `rain-ui`预设的`small|middle|large`或者是`string[]` 例如`size={['24px','16px']}`前者为垂直间距，后者为水平间距

<code src="./demo/size.tsx">

## 对齐方式

<code src="./demo/align.tsx">

<API src="./index.tsx"></API>
