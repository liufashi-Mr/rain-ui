---
title: 设计
order: 1
nav:
  title: 指南
  path: /guide
---

# 设计

## 起源

公司的 ui 设计风格未统一的情况下，设计师们总是有自己不同的想法，一个公司都会如此，猜想到不同公司的设计颜色圆角等肯定大相径庭，为了较高程度的实现 ui 设计稿，于是一个产出一个高度定制化的组件库的想法油然而生

## 项目架构

项目采用基于 react 18 采用 less + css 变量的方式，让所有变量都有了修改的可能，文档及开发环境基于 dumi。打包采用 webpack 生成`esm`，`cjs`和`umd`生成三种产物，提高不同环境下的可用性