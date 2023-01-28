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

使用 image 组件传入`src`,默认宽高为图片大小，可以通过`width`和`height`属性设置宽高，设置 `preview`开启预览。

<code src="./demo/base.tsx">

### 自定义遮罩层预览栏

通过 ` previewRender：(onPreview: () => void) => ReactNode``自定义操作栏，通过callback ` 回调开启预览 <code src="./demo/opt.tsx">

### 加载失败的图片

加载失败使用 `rain-ui` 默认的失败样式，也可以是用 `error` 属性自定义失败时显示的图片 <code src="./demo/error.tsx">

### 添加图片描述

添加`title`属性为图片添加文字描述，`rain-ui`支持使用`titleStyle` `imageStyle` `style` `radius` 等属性来使的在图片尺寸不一致时让 `title` 和 `image` 比例更加和谐。当 `titlePlacement=nether` 时`rain-ui` 提供了一套默认的方案，需要注意 当 `titlePlacement=nether` 的时需要设置 `Image` 宽度来避免`title` 溢出 <code src="./demo/title.tsx">

### 自定义 title

`Image` 组件的 `title` 可以传入任意的 `ReactNode` ，通过样式的设置，我们可以使用`Image` 写出好看的样式。 <code src="./demo/nether.tsx">

### 多张图片预览

使用 `PreviewGroup` 包裹 `Image` 组件

<code src="./demo/group.tsx">

### 单独使用预览

使用`Image.ImagePreview` 传入 `imagePreviewSrc: src | src[]`,需要手动维护一个`state`。

<code src="./demo/preview.tsx">

<API src="./index.tsx"/>

## API

### Image

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| style | 最外层容器样式 | `CSSProperties` | {} |
| style | 最外层容器样式 | `CSSProperties` | {} |
| imageStyle | 图片样式 | `CSSProperties` | {} |
| titleStyle | 标题样式 | `CSSProperties` | {} |
| className | 外层容器类名 | `string` | {} |
| src | 图片 src | `string` | - |
| radius | 图片圆角 | `number` | `8px` |
| width | 图片宽度 | `string \| number` | - |
| height | 图片高度 | `string \| number` | - |
| title | 图片描述 | `ReactNode` | - |
| titlePlacement | 图片描述位置 | `'inner' \| 'nether'` | `inner` |
| titleWidth | 图片描述文字宽度，文字超长是使用 | `string \| number` | - |
| preview | 预览模式 | `boolean` | `false` |
| previewRender | 自定义遮罩层操作栏 | `(onPreview: () => void) => ReactNode` | `<EyeOutlined/>` |
| error | 加载失败显示的图片 src | `string` | rain-ui 内置图片 |

### Image.ImagePreview

| Name            | Description      | Type                 | Default |
| --------------- | ---------------- | -------------------- | ------- |
| visible         | 是否显示         | `boolean`            | `false` |
| onClose         | 点击关闭的回调   | `() => void`         | -       |
| imagePreviewSrc | 点击关闭的回调   | `string[] \| string` | -       |
| startIndex      | 开始预览时的索引 | `number`             | `0`     |
