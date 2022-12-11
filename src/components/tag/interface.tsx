import type { ReactNode } from 'react';

interface TagProps {
  /**
   * @description 标签是否可以关闭
   * @default false
   */
  closable: boolean;
  color?: string;
  icon?: ReactNode;
  /**
   * @description 标签大小
   * @default 'middle'
   */
  size: 'small' | 'middle' | 'large';
}
export type { TagProps };
