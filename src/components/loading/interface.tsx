import type React from 'react';

export interface LoadingProps {
  /**
   * @description       loading的效果
   * @default           blossom
   */
  type?: 'blossom' | 'spin' | 'collide';
  /**
   * @description       loading的大小
   * @default           middle
   */
  size?: 'small' | 'middle' | 'large';
  /**
   * @description       文字提示
   * @default           -
   */
  tip?: string;
  /**
   * @description       loading开关
   * @default           trye
   */
  loading?: boolean;
  /**
   * @description       自定义loading节点
   * @default           -
   */
  indicator?: React.ReactNode;
  children?: React.ReactNode;
}
