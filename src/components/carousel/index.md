---
title: Carousel 走马灯
group:
  title: 数据展示
  path: /data
nav:
  path: /components
---

# Carousel 走马灯

旋转木马，一组轮播的区域。

## 何时使用

- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。

## 代码演示

### 基本用法

自动轮播 <code src="./demo/basic.tsx"></code>

### 手动调用

手动调用，`rain-ui`在`carousel ref`中暴露除了三个方法 `next` `previous` 以及`goTo(index)` 让我们可以手动控制轮播，也可以在`carousel`父元素添加滑动结合`next` `previous`实现拖动到下一张 <code src="./demo/handle.tsx"></code>

### 预设箭头

`rain-ui`设置`arrows=true`时展示默认箭头，若需要自定义箭头可以自行定位结合暴露出的 `next` `previous` 方法实现 <code src="./demo/widthArrows.tsx"></code>

### 指定数目一屏

<code src="./demo/slidesToShow.tsx"></code>

<API></API>
