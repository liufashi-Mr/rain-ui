import type { ReactNode } from 'react';

interface TagProps {
  /**
   * @description 标签是否可以关闭
   * @default false
   */
  closable?: boolean;
  color?: string;
  icon?: ReactNode;
  /**
   * @description tag是否为带边框类型，仅当color为预设值时生效
   * @default false
   */
  bordered?: boolean;
  // checked?: boolean;
  /**
   * @description 关闭时的回调（可通过 e.preventDefault() 来阻止默认行为）
   * @default -
   */
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  // onChange?: (checked: boolean) => void;
  className?: string;
  children: ReactNode;
}
export type { TagProps };
