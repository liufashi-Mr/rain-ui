---
title: Image 图片
group:
  title: 数据展示
  path: /data
nav:
  path: /components
---

# Image 图片

可预览的图片展示组件。

## 何时使用

需要展示图片时使用。

## 基本使用

### 图片展示和预览

使用 image 组件传入`src`,默认宽高为图片大小，可以通过`width`和`height`属性设置宽高，设置 `preview`开启预览 <code src="./demo/base.tsx">

### 添加图片描述

添加`title`属性为图片添加文字描述，`rain-ui`支持使用`titleStyle` `imageStyle` `style` `radius` 等属性来使的在图片尺寸不一致时让 `title` 和 `image` 比例更加和谐。当 `titlePlacement=nether` 时`rain-ui` 提供了一套默认的方案，需要注意 当 `titlePlacement=nether` 的时需要设置 `Image` 宽度来避免`title` 溢出 <code src="./demo/title.tsx">

### 自定义 title

通过样式的设置，我们可以使用`Image` 写出好看的样式。 <code src="./demo/nether.tsx">

### 多张图片预览

<code src="./demo/group.tsx">

<API src="./index.tsx"/>
