---
title: ConfigProvider 全局配置
order: 0
group:
  title: 其他
  path: /others
nav:
  title: 组件
  path: /components
---

为组件提供统一的主题配置。

## 使用

ConfigProvider 基于 context，只需在应用外围包裹 configProvider。

```tsx
import { ConfigProvider } from 'raind';

// ...

export default () => (
  <ConfigProvider dark>
    <App />
  </ConfigProvider>
);
```

### 深色主题和紧凑主题

组件库支持紧凑主题和深色主题，在切换深色主题的时候 `rain-ui` 会根据当前设置的主题颜色结合你传入的`darkBackgroundColor`的颜色（默认值`#141414`）自动计算深色模式下的颜色，达到视觉协调的目的，深色模式是直接修改的全局的主题。紧凑模式提供更小尺寸的组件以显示更多内容。点击右下角体验深色主题和紧凑模式。

### 修改主题

通过修改`rain-ui`向外提供的变量达到修改主题的目的，主题色提供了四种颜色的配置，以下为默认值

```tsx
const initTheme = {
  primary: '#1890ff',
  success: '#52c41a',
  warning: '#faad14',
  error: '#f5222d',
};
```

#### 全局颜色

我们的文档站点是被一个`configProvider`包裹的，可以点击右下角体验主题的变化。基本配置和下面的局部主题配置一致 <code src="./demo/global.tsx">

#### 局部颜色

在`configProvider`中添加`local`属性，可实现其子元素的局部主题(文档站点是被一个`configProvider`包裹的，里面的配置是一个全局主题，此处就是局部主题) <code src="./demo/theme.tsx">

#### 修改其余配置

修改全局配置，配置字体相关颜色的时候需要使用十六进制黑色或者白色 如`#000000` + 十六进制对应的透明度，例如 20% 透明度为`#00000033`，这样 rain-ui 在你切换为深色模式的时候会计算出深色下对应的颜色，若未按照该规范在正常模式下依然生效，但是深色模式下会采用 rain-ui 暗色模式下的默认值。以下为可供修改的 css 变量。

```tsx
// 正常模式下变量默认值
const initVariables = {
  '--rain-font-size-base': '14px', // 主字号
  '--rain-heading-color': '#000000e0', // 标题色
  '--rain-text-color': '#000000d9', // 主文本色
  '--rain-text-color-secondary': '#00000073', // 次文本色
  '--rain-disabled-color': '#ffffff40', // 失效色
  '--rain-border-radius-base': '8px', // 组件/浮层圆角
  '--rain-border-color-base': '#d9d9d9', // 边框色
  '--rain-background-color-base': '#fafafa', // 背景色
};
// 深色模式下变量默认值
const initVariablesDark = {
  '--rain-font-size-base': '14px', // 主字号
  '--rain-heading-color': '#ffffffe0', // 标题色
  '--rain-text-color': '#ffffffd9', // 主文本色
  '--rain-text-color-secondary': '#ffffff73', // 次文本色
  '--rain-disabled-color': '#ffffff40', // 失效色
  '--rain-border-radius-base': '8px', // 组件/浮层圆角
  '--rain-border-color-base': '#434343', // 边框色
  '--rain-background-color-base': '#00000005', // 背景色
};
```

还可以采用中性色板中的颜色，rain-ui 同样也会在切换深色模式的时候计算对应的颜色,以下为中心色版的颜色

```tsx
const neutralColor = [
  '#ffffff',
  '#fafafa',
  '#f5f5f5',
  '#f0f0f0',
  '#d9d9d9',
  '#bfbfbf',
  '#8c8c8c',
  '#595959',
  '#434343',
  '#262626',
  '#1f1f1f',
  '#141414',
  '#000000',
];
```

全局修改亦是如此，此处不作展示

#### 示例

采用这两种方式会自动适配深色模式 <code src="./demo/config.tsx">

<API src="./index.tsx"/>
