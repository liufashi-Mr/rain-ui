import type { ThemeVariables } from 'src/components/configProvider/interface';
import { generate } from '@ant-design/colors';
const initTheme = {
  primary: '#1890ff',
  success: '#52c41a',
  warning: '#faad14',
  error: '#f5222d',
};

// 主题配色
export const setThemeConfig = (element: HTMLElement, theme?: ThemeVariables): void => {
  if (!theme) return;
  const mergedTheme = { ...initTheme, ...theme };
  Object.keys(mergedTheme).forEach((item: keyof ThemeVariables) => {
    if (mergedTheme[item]) {
      const colors = generate(mergedTheme[item] as string);
      element.style.setProperty(`--rain-${item}-color`, colors[5]);
      element.style.setProperty(`--rain-${item}-color-hover`, colors[4]);
      element.style.setProperty(`--rain-${item}-color-active`, colors[6]);
      element.style.setProperty(`--rain-${item}-color-outline`, colors[5] + '33');
    }
  });
};

// 深色模式
export const setDarkTheme = (
  element: HTMLElement,
  backgroundColor: string = '#141414',
  theme: ThemeVariables = initTheme,
  isUsed: boolean = true,
): void => {
  const mergedTheme = { ...initTheme, ...theme };
  Object.keys(mergedTheme).forEach((item: keyof ThemeVariables) => {
    if (mergedTheme[item]) {
      const colors = generate(
        mergedTheme[item] as string,
        isUsed
          ? {
              theme: 'dark',
              backgroundColor,
            }
          : undefined,
      );
      element.style.setProperty(`--rain-${item}-color`, colors[5]);
      element.style.setProperty(`--rain-${item}-color-hover`, colors[4]);
      element.style.setProperty(`--rain-${item}-color-active`, colors[6]);
      element.style.setProperty(`--rain-${item}-color-outline`, colors[5] + '33');
    }
  });
};
