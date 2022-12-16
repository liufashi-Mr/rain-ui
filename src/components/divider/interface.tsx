import type React from 'react';

interface DividerProps {
  /**
   * @description 嵌套的标题
   * @default -
   */
  children?: React.ReactNode;
  /**
   * @description 分割线样式类
   * @default -
   */
  className?: string;
  /**
   * @description  是否虚线
   * @default  false
   */
  dashed?: boolean;
  /**
   * @description 分割线标题的位置
   * @default center
   */
  orientation?: 'left' | 'right' | 'center';
  /**
   * @description 标题和最近 left/right 边框之间的距离，去除了分割线，同时 orientation 必须为 left 或 right
   * @default -
   */
  orientationMargin?: string | number;
  /**
   * @description 文字是否显示为普通正文样式
   * @default false
   */
  plain?: boolean;
  /**
   * @description 水平还是垂直类型
   * @default horizontal
   */
  type?: 'horizontal' | 'vertical';
  /**
   * @description 分割线样式对象
   * @default -
   */
  style?: React.CSSProperties;
}

export type { DividerProps };
