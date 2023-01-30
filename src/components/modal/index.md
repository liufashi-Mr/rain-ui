---
title: Modal 对话框
group:
  title: 反馈
  path: /feedback
nav:
  path: /components
---

# Modal 对话框

在当前页面打开一个浮层，承载相关操作。

## 代码演示

### 基本使用

点击展开一个对话框 <code src="./demo/base.tsx"/>

### 异步关闭

点击确定后异步关闭对话框，例如提交表单。可以通过`confirmLoading`来给确认按钮添加 loading 效果，也可以使`onConfirm`返回一个`Promise`, 若`Promise` 最终是`reject` `rain-ui`会给出提示。 <code src="./demo/async.tsx"/>

### 自定义页脚

通过`confirmButtonProps`和`cancelButtonProps`修改页脚按钮，也可以通过`footer`修改自定义底部按钮，`footer===null`时无页脚 <code src="./demo/footer.tsx"/>

### title 添加图标

`rain-ui` 给 modal 内置了四种类型的图标，可以结合`confirmButtonProps`实现不同功能的 modal,也可以使用`icon`给标题添加图标，同样也可以想`title`传入`ReactElement`。 <code src="./demo/icon.tsx"/>

### 函数式调用

使用 modal 需要维持一个`state`可能还会有`confirmLoading`，如果少量信息或者是少量操作的时候不够便捷，`rain-ui`提供函数式调用的方式使用 modal。若是这些不符合您的业务需求，你仍可以使用 Modal 的配置项修改他。 <code src="./demo/func.tsx"/>

<API src="./index.tsx"> </API>

## Modal.[type]

和上面一致，去掉了 `visible` 和 `children` 新增 `content` 为 modal 的内容。
