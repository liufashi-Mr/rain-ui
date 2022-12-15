---
title: 在 Typescript 中使用
order: 10
nav:
  title: 指南
  path: /guide
---

# 在 TypeScript 中使用

使用 create-react-app 一步步地创建一个 TypeScript 项目，并引入 raind。

<Alert>raind 基于最新稳定版本的 TypeScript（>=4.0.0），请确保项目中使用匹配的版本。</Alert>

## 安装和初始化

```shell  
create-react-app my-ts-app --typescript
```

## 配置 TypeScript 环境

```shell  
npm i typescript --save-dev
npx tsc --init            //初始化tsconfig.json文件并配置
npm i --save-dev @types/react @types/react-dom @types/node
```

这样就安装完 TypeScript 在 create-react-app 项目中所有的依赖包了。

## 安装

通过命令安装 raind：

```shell  
npm i --save-dev raind
```

安装完成直接使用，无需声明、无需引入(`raind/types/index.d.ts`),

## 引入和使用

在项目中新建一个 tsx 文件并写入：

```tsx  
import { Button, DatePicker, Loading } from 'raind';

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);
```

修改 src/App.css，在文件顶部引入 `raind/dist/style/rain-ui.min.css`。

```css  
@import "~raind/dist/style/rain-ui.min.css";
```

好了，现在你应该能看到页面上已经有了`raind`的蓝色按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 create-react-app 的官方文档。
