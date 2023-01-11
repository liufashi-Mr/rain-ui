---
title: Button 按钮
order: 0
group:
  order: 0
  title: 通用
  path: /common
nav:
  title: 组件
  path: /components
---

# Button 按钮

按钮，用于开始一个操作

rain-ui 在 button 中添加了很多小细节，比如 hover 和 active 的颜色取自于由 primary-color 生成的色板，颜色和谐，再点击后还会有一个阴影的效果，不同类型的按钮有不同的效果

rain-ui 根据当前色彩计算设置暗色主题之后的颜色，以及紧凑模式，点击右下角试试叭~

## 按钮类型

<code src="./demo/base.tsx"></code>

## 尺寸和形状

按钮尺寸、图标、形状、长按钮 <code src="./demo/size.tsx"></code>

## 危险按钮和禁用按钮

危险操作按钮，通常情况下可以使用`type='error'`替代，当`type='link'|'text'`时使用到该属性 <code src="./demo/danger.tsx"></code>

## 幽灵按钮

将 type 的边框和字体颜色反转，背景为透明，在有背景色的页面会更加和谐 <code src="./demo/ghost.tsx"></code>

## 加载中

加载中的按钮无法点击，常用于提交数据比起防抖来说更加完美，就是需要我们维护一个 loading 状态，推荐搭配`useRequest`使用来简化这一问题 <code src="./demo/loading.tsx"></code>

<API src="./index.tsx"></API>
