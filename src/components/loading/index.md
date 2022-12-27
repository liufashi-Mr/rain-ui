---
title: Loading 加载中
order: 0
group:
  title: 通用
  path: /common
nav:
  title: 组件
  path: /components
---

# Loading 加载中

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 基本使用

### loading 的效果

<code src="./demo/base.tsx"></code>

### 自定义描述文案

<code src="./demo/text.tsx"></code>

### loading 的尺寸

<code src="./demo/size.tsx"></code>

### 将 loading 放入一个盒子中

<code src="./demo/container.tsx"></code>

### loading 的样式

rain-ui 提供了三种样式的 loading 效果：

- `spin` 经典的加载效果，
- `blossom` 由小而大的绽放效果
- `collide` 物理规律的碰撞效果

当然我们同样支持自定义的 loading <code src="./demo/type.tsx"></code>

<API src="./index.tsx"></API>
