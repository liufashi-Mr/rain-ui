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
  /**
   * @description Message类型
   */
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
   * @description 关闭时的回调（可通过 e.preventDefault() 来阻止默认行为）
   * @default -
   */
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * @description message的容器
   * @default  document.body
   */
  container?: HTMLElement;
}

export type { MessageProps };
