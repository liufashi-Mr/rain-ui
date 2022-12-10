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
  Object.keys(theme).forEach((item: keyof ThemeVariables) => {
    if (theme[item]) {
      const colors = generate(theme[item] as string);
      element.style.setProperty(`--rain-${item}-color`, colors[5]);
      element.style.setProperty(`--rain-${item}-color-hover`, colors[4]);
      element.style.setProperty(`--rain-${item}-color-active`, colors[6]);
    }
  });
};

// 深色模式
export const setDarkTheme = (
  backgroundColor: string = '#141414',
  theme: ThemeVariables = initTheme,
  isUsed: boolean = true,
): void => {
  const element = document.documentElement;
  Object.keys(theme).forEach((item: keyof ThemeVariables) => {
    if (theme[item]) {
      const colors = generate(
        theme[item] as string,
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
    }
  });
};
