---
title: 快速开始
order: 2
nav:
  title: 指南
  path: /guide
---

# 快速开始

## 项目安装

**使用 npm 或 yarn 安装**

```shell  
npm install raind --save
```

```shell  
yarn add raind
```

为什么是 raind？因为 rain-ui 被别人用了

然后引入样式文件`raind/dist/style/rain-ui.min.css`

## 示例

```tsx  
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'raind/dist/style/rain-ui.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

使用：引入直接使用即可

```jsx  
import { Button } from 'raind';
```

**使用 srcipt 方式引入安装**

项目打包后提供了 umd 模块，在浏览器中使用 script 和 link 标签直接引入文件，引入 `raind/umd/index.js`和 `raind/dist/style/rain-ui.min.css`，你也可以通过 CDNJS， 或 UNPKG 进行下载。
