---
title: Tag 标签
order: 0
group:
  title: 数据展示
  path: /data
nav:
  path: /components
---

# Tag 标签

进行标记和分类的小标签，让页面更加一目了然。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。
- 用与状态等使更加显眼

## 基本使用

传入`color`属性，rain-ui 支持以下预设颜色，当然你同样可以传入自定义颜色 <code src="./demo/base.tsx"/>

## 可关闭的标签

点击标签可以关闭，可以设置关闭之后的回调函数 <code src="./demo/closeable.tsx"/>

## 边框模式

当你的`color`属性为 rain-ui 下的预设颜色时，可以传入`bordered={true}`，来使`tag`呈现另一种风格，该模式下，边框色和背景色都是根据色板动态计算，切换主题等操作 rain-ui 都能相应的计算出对应的`background-color`和`border-color`，以提供更舒适的视觉体验。可以点击右上角切换主题感受色彩的变化

<code src="./demo/type.tsx"/>

## 添加 icon

可以使用想 tag 添加`icon`属性，或者直接将 icon 作为 tag 的 children，icon 的颜色在边框模式下与字体颜色一致，在正常模式下为白色。 <code src="./demo/icon.tsx"/>

## 可选中的标签

点击标签可以关闭，可以设置关闭之后的回调函数 <code src="./demo/checkable.tsx"/> <API src="./index.tsx"> </API>
