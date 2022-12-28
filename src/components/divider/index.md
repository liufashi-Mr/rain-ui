---
title: Divider 分割线
group:
  title: 布局
  path: /layout
nav:
  path: /components
---

# Divider 分割线

区分内容的分割线

## 何时使用

- 对不同文章的文本段落进行分割。
- 对行内文字/链接进行分割，比如表格的操作列。

## 基本使用

默认水平分割线，可在中间插入文字。

<code src="./demo/base.tsx">

## 垂直分割线

使用 type=`vertical` 设置为行内的垂直分割线(除了 dashed 其它 api 不会生效)。

<code src="./demo/verticalLine.tsx">

## 带文字的分割线

分割线中带有文字，默认在中间，可用`orientation`指定位置、`orientationMargin`指定距离。

<code src="./demo/hasWordLine.tsx">

## 分割文字使用正文样式

使用`plain`可以设置为更轻量的分割文字样式。

<code src="./demo/plainLine.tsx">

<API src="./index.tsx"></API>
