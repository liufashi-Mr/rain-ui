---
title: message 消息提示
group:
  title: 反馈
  path: /feedback
nav:
  path: /components
---

# message 消息提示

### 基本使用

使用 message 弹出一个提示 <code src="./demo/base.tsx"/>

### message 的类型

`rain-ui` 自带一下类型的 `'info' | 'success' | 'warning' | 'error' | 'loading'` 其中`type=loading` 的时候默认时间是`10s`，我们将在下面将介绍原因 <code src="./demo/type.tsx"/>

### loading message 的使用

`rain-ui`希望我们在使用`loading message` 的时候是发送一个异步请求，然后请求成功后手动关闭， <code src="./demo/loading.tsx"/>

### 可手动关闭的 message

点击可以手动关闭 message，支持自定义关闭后的回调 <code src="./demo/closeable.tsx"/>

## `message[type](config)`config 的配置项

<API src="./index.tsx"> </API>
