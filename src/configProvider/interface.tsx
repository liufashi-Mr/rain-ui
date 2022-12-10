import { ReactNode } from 'react';

export type ThemeVariables = {
  primary?: string;
  success?: string;
  warning?: string;
  error?: string;
};

interface ConfigProviderProps {
  children?: ReactNode;
  /**
   * @description 全局主题
   * @default ThemeVariables
   */
  globalTheme?: ThemeVariables;
  /**
   * @description 子节点主题
   * @default ThemeVariables
   */
  childrenTheme?: ThemeVariables;
  /**
   * @description 深色模式
   * @default false
   */
  darkTheme?: boolean;
  /**
   * @description 项目深色模式背景
   * @default  #141414
   */
  darkBackgroundColor?: string;
  /**
   * @description 紧凑模式
   * @default false
   */
  compact?: boolean;
}

export type { ConfigProviderProps };
