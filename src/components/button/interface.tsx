import type React from 'react';

export type ButtonType =
  | 'default'
  | 'primary'
  | 'warning'
  | 'success'
  | 'error'
  | 'dashed'
  | 'text'
  | 'link';
export type ButtonSize = 'small' | 'default' | 'large';
export type ButtonShape = 'circle' | 'round' | 'default';
export type ButtonHTMLType = 'submit' | 'button' | 'reset';
export interface BaseButtonProps {
  /**
   * @description       Button的类型
   * @default           default
   */
  type?: ButtonType;
  /**
   * @description       Button的大小
   * @default           default
   */
  size?: ButtonSize;
  /**
   * @description       Button的形状
   * @default           default
   */
  shape?: ButtonShape;
  /**
   * @description       Button的圆角
   * @type
   * @default           4px
   */
  radius?: string;
  /**
   * @description       危险操作按钮，通常情况下可以使用type='error'替代，当type='link'时使用到该属性
   * @default           false
   */
  danger?: boolean;
  /**
   * @description       内联样式
   * @default           -
   */

  style?: React.CSSProperties;
  /**
   * @description       类名
   * @default           -
   */
  className?: string;
  /**
   * @description       图标
   * @default           -
   */
  icon?: React.ReactNode;
  /**
   * @description       加载中
   * @default           false
   */
  loading?: boolean;
  /**
   * @description       幽灵按钮
   * @default           false
   */
  ghost?: boolean;
  children?: React.ReactNode;
}

export type AnchorButtonProps = {
  /**
   * @description       href，同a标签
   * @type              string
   * @default           -
   */
  href?: string;
  /**
   * @description       target
   * @default           _self
   */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /**
   * @description       点击事件
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

export type NativeButtonProps = {
  /**
   * @description       原生htmlType
   * @type              button、submit、reset
   * @default           button
   */
  htmlType?: ButtonHTMLType;
  /**
   * @description       点击事件
   * @type              Funcation
   * @default           -
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;
