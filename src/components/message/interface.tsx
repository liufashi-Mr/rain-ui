import type { CSSProperties, ReactNode } from 'react';

export type MessageType = 'info' | 'success' | 'warning' | 'error' | 'loading';

interface MessageProps {
  /**
   * @description 自定义样式
   * @default {}
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   * @default {}
   */
  className?: string;
  /**
   * @description 对象类型传参时的内容
   */
  content?: ReactNode;
  type?: MessageType;
  /**
   * @description 显示时间
   * @default 3000ms
   */
  duration?: number;
  /**
   * @description 出现可清除按钮
   * @default false
   */
  closeable?: boolean;
  /**
   * @description 自定义icon
   * @default false
   */
  icon?: ReactNode;
  /**
   * @description 关闭时的回调
   * @default -
   */
  onClose?: () => void;
  handleClose?: () => void;
  loadingClose?: (callback: React.Dispatch<React.SetStateAction<boolean>>) => void;
}

export type { MessageProps };
