import type { CSSProperties } from 'react';

export type SpaceSize = 'mini' | 'small' | 'middle' | 'large';
export type SpaceDirection = 'horizontal' | 'vertical';
export type SpaceAlign = 'center' | 'start' | 'end' | 'baseline';
interface SpaceProps {
  /**
   * @description 布局元素
   * @default -
   */
  children?: React.ReactNode;
  /**
   * @description Space容器样式
   * @default -
   */
  style?: CSSProperties;
  /**
   * @description Space item容器样式
   * @default -
   */
  spaceItemStyle?: CSSProperties;
  /**
   * @description Space容器类名
   * @default -
   */
  className?: string;
  /**
   * @description 间距
   * @default small
   */
  size?: SpaceSize | string[];
  /**
   * @description 布局方向
   * @default horizontal
   */
  direction?: SpaceDirection;
  /**
   * @description 是否换行
   * @default true
   */
  wrap?: boolean;
  /**
   * @description 对其方式
   * @default center
   */
  align?: SpaceAlign;
}

export type { SpaceProps };
