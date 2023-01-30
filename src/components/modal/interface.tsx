import type { ReactNode, CSSProperties } from 'react';
import type { ButtonProps } from '../button/interface';

export type ModalTypes = 'info' | 'warning' | 'success' | 'error';
interface ModalProps {
  /**
   * @description 弹窗类型
   * @default -
   */
  type?: ModalTypes;
  icon?: ReactNode;
  /**
   * @description 自定义类名
   * @default -
   */
  className?: string;
  /**
   * @description 弹窗宽度
   * @default -
   */
  width?: string | number;
  /**
   * @description 自定义样式
   * @default -
   */
  style?: CSSProperties;
  /**
   * @description 标题
   * @default -
   */
  title?: ReactNode;
  /**
   * @description 显示状态
   * @default -
   */
  visible?: boolean;
  /**
   * @description 确认按钮loading
   * @default -
   */
  confirmLoading?: boolean;
  /**
   * @description 确认按钮回调函数
   * @default -
   */
  onConfirm?: Function;
  /**
   * @description 取消按钮回调函数
   * @default -
   */
  onCancel?: Function;
  /**
   * @description 确认按钮文字
   * @default 确认
   */
  confirmText?: string;
  /**
   * @description 取消按钮文字
   * @default 取消
   */
  cancelText?: string;
  /**
   * @description 确认按钮props
   * @default -
   */
  confirmButtonProps?: ButtonProps;
  /**
   * @description 取消按钮props
   * @default -
   */
  cancelButtonProps?: ButtonProps;
  /**
   * @description 自定义底部按钮，为null时不显示底部按钮
   * @default -
   */
  footer?: ReactNode;
  /**
   * @description 显示遮罩层
   * @default true
   */
  mask?: boolean;
  /**
   * @description 点击遮罩层关闭
   * @default true
   */
  maskClosable?: boolean;
  /**
   * @description 自定义关闭图标，为null时不显示
   * @default -
   */
  closeIcon?: ReactNode;
  children?: ReactNode;
  useFunction?: boolean;
}
interface ModalConfigProps extends Exclude<ModalProps, 'children'> {
  content?: React.ReactNode;
}
export type { ModalProps, ModalConfigProps };
