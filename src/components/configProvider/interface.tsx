import type { ReactNode } from 'react';

export type ThemeVariables = {
  primary?: string;
  success?: string;
  warning?: string;
  error?: string;
};

export type OtherVariables = {
  '--rain-font-size-base'?: string; // 主字号
  '--rain-heading-color'?: string; // 标题色
  '--rain-text-color'?: string; // 主文本色
  '--rain-text-color-secondary'?: string; // 次文本色
  '--rain-disabled-color'?: string; // 失效色
  '--rain-border-radius-base'?: string; // 组件/浮层圆角
  '--rain-border-color-base'?: string; // 边框色
};

interface ConfigProviderProps {
  children?: ReactNode;
  /**
   * @description 全局主题
   * @default ThemeVariables
   */
  theme?: ThemeVariables;
  /**
   * @description 其他变量配置
   * @default OtherVariables
   */
  config?: OtherVariables;
  /**
   * @description 深色模式
   * @default false
   */
  dark?: boolean;
  /**
   * @description 局部配置，全局配置css variables挂载在root，局部配置在configProvider上
   * @default false
   */
  local?: boolean;
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
