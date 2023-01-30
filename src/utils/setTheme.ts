import type { ThemeVariables, OtherVariables } from 'src/components/configProvider/interface';
import { generate } from '@ant-design/colors';
const initTheme = {
  primary: '#165dff',
  success: '#52c41a',
  warning: '#faad14',
  error: '#f5222d',
};

const initVariables = {
  '--rain-font-size-base': '14px', // 主字号
  '--rain-heading-color': '#000000e0', // 标题色
  '--rain-text-color': '#000000d9', // 主文本色
  '--rain-text-color-secondary': '#00000073', // 次文本色
  '--rain-disabled-color': '#ffffff40', // 失效色
  '--rain-border-radius-base': '4px', // 组件/浮层圆角
  '--rain-border-color-base': '#d9d9d9', // 边框色
  '--rain-background-color-base': '#fafafa', // 背景色
};
const initVariablesDark = {
  '--rain-font-size-base': '14px', // 主字号
  '--rain-heading-color': '#ffffffe0', // 标题色
  '--rain-text-color': '#ffffffd9', // 主文本色
  '--rain-text-color-secondary': '#ffffff73', // 次文本色
  '--rain-disabled-color': '#ffffff40', // 失效色
  '--rain-border-radius-base': '4px', // 组件/浮层圆角
  '--rain-border-color-base': '#434343', // 边框色
  '--rain-background-color-base': '#00000005', // 背景色
};
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
const setColors = (element: HTMLElement, colors: string[], item: string) => {
  element.style.setProperty(`--rain-${item}-color-1`, colors[0]);
  element.style.setProperty(`--rain-${item}-color-2`, colors[1]);
  element.style.setProperty(`--rain-${item}-color-3`, colors[2]);
  element.style.setProperty(`--rain-${item}-color-hover`, colors[3]);
  element.style.setProperty(`--rain-${item}-color`, colors[4]);
  element.style.setProperty(`--rain-${item}-color-active`, colors[5]);
  element.style.setProperty(`--rain-${item}-color-7`, colors[6]);
  element.style.setProperty(`--rain-${item}-color-8`, colors[7]);
  element.style.setProperty(`--rain-${item}-color-9`, colors[8]);
  element.style.setProperty(`--rain-${item}-color-10`, colors[9]);
  element.style.setProperty(`--rain-${item}-color-outline`, colors[4] + '33');
};

// 主题配色
export const setThemeConfig = (element: HTMLElement, theme?: ThemeVariables): void => {
  if (!theme) return;
  const mergedTheme = { ...initTheme, ...theme };
  Object.keys(mergedTheme).forEach((item: keyof ThemeVariables) => {
    if (mergedTheme[item]) {
      const colors = generate(mergedTheme[item] as string);
      setColors(element, colors, item);
    }
  });
};

/**
 * 配置规则一：
 * 修改全局配置，配置字体相关颜色的时候需要使用十六进制黑色或者白色 如#000000 + 十六进制对应的透明度，例如20% 透明度为#00000033
 * 这样rain-ui在你切换为深色模式的时候会计算出深色下对应的颜色，
 * 若未按照该规范在正常模式下依然生效，但是深色模式下会采用rain-ui暗色模式下的默认值
 * 配置规则二：
 * 另外除box-shadow外的颜色配置 还可以采用中性色板中的颜色，rain-ui同样也会在切换深色模式的时候计算对应的颜色
 * @param element
 * @param dark
 * @param variables
 * @returns
 */
export const setOtherConfig = (
  element: HTMLElement,
  dark: boolean = false,
  variables: OtherVariables = {},
): void => {
  const mergedVariables = { ...initVariables, ...variables };
  Object.keys(mergedVariables).forEach((item: keyof OtherVariables) => {
    if (mergedVariables[item]) {
      // 如果开启深色模式，修改变量
      if (dark) {
        // 是否为中心色板中的颜色
        const colorIndex = neutralColor.indexOf(mergedVariables[item]);
        if (colorIndex < 0) {
          // 不是则按照第一种配置规则
          element.style.setProperty(
            item,
            // 是否是十六进制黑色+十六进制透明度
            mergedVariables[item].includes('000000') || mergedVariables[item].includes('ffffff')
              ? mergedVariables[item].includes('000000')
                ? mergedVariables[item].replace('000000', 'ffffff')
                : mergedVariables[item].replace('ffffff', '000000')
              : // rain-ui 默认值
              mergedVariables[item].includes('px')
              ? mergedVariables[item]
              : initVariablesDark[item],
          );
        } else {
          // 第二种
          element.style.setProperty(item, neutralColor[neutralColor.length - colorIndex - 1]);
        }
      } else {
        element.style.setProperty(item, mergedVariables[item]);
      }
    }
  });
};
// 深色模式
export const setDarkTheme = (
  element: HTMLElement,
  backgroundColor: string = '#141414',
  theme: ThemeVariables = initTheme,
  dark: boolean = false,
): void => {
  const mergedTheme = { ...initTheme, ...theme };
  Object.keys(mergedTheme).forEach((item: keyof ThemeVariables) => {
    if (mergedTheme[item]) {
      const colors = generate(
        mergedTheme[item] as string,
        dark
          ? {
              theme: 'dark',
              backgroundColor,
            }
          : undefined,
      );
      setColors(element, colors, item);
    }
  });
  neutralColor.forEach((x, i, arr) => {
    element.style.setProperty(`--rain-neutral-color-${i + 1}`, dark ? arr[arr.length - i - 1] : x);
  });
};
