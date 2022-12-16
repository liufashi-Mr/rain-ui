import type { ReactNode, CSSProperties } from 'react';

interface TagProps {
  /**
   * @description 标签是否可以关闭
   * @default false
   */
  closable?: boolean;
  /**
   * @description 关闭时的回调（可通过 e.preventDefault() 来阻止默认行为）
   * @default -
   */
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * @description 标签颜色，`primary`, `warning`, `error`, `success`, `default`预设值
   * @default -
   */
  color?: string;
  /**
   * @description 图标
   * @default -
   */
  icon?: ReactNode;
  /**
   * @description tag是否为带边框类型，仅当color为预设值时生效
   * @default false
   */
  bordered?: boolean;
  /**
   * @description 自定义类名
   * @default -
   */
  className?: string;
  /**
   * @description tag 样式
   * @default -
   */
  style?: CSSProperties;
  /**
   * @description tag是否可以选中
   * @default false
   */
  checkable?: boolean;
  /**
   * @description tag是否默认选中
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * @description 选中回调
   * @default -
   */
  onChecked?: (checked: boolean, value: ReactNode) => void;
  children: ReactNode;
}
export type { TagProps };
