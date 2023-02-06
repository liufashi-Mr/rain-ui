---
title: Drawer 抽屉
group:
  title: 反馈
  path: /feedback
nav:
  path: /components
---

# Drawer 抽屉

触发命令后，从屏幕一侧滑出的抽屉式的面板。

## 基本使用

基础抽屉，点击触发按钮抽屉从右侧滑出，点击遮罩区关闭。

<code src="./demo/base.tsx"/>

## 自定义位置

自定义位置，点击触发按钮抽屉从相应的位置滑出。

<code src="./demo/position.tsx"/>

## 自定义节点

可以通过 title 属性和 footer 属性定制节点内容。当设置为 null 时，将不会渲染对应的 dom 节点。

<code src="./demo/customNode.tsx"/>

## 挂载节点

可以通过 getPopupContainer 指定抽屉挂载的父级节点(父节点得指定 position: 'relative')。

<code src="./demo/mountNode.tsx"/>

## 多层抽屉

在抽屉内打开新的抽屉。

<code src="./demo/multiLayout.tsx"/>

<API src="./index.tsx"/>
