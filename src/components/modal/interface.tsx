import type { ReactNode, CSSProperties } from 'react';
import type { ButtonProps } from '../button/interface';
interface ModalProps {
  className?: string;
  width?: string | number;
  style?: CSSProperties;
  title?: ReactNode;
  visible?: boolean;
  confirmLoading?: boolean;
  onConfirm?: Function;
  onCancel?: Function;
  confirmText?: string;
  cancelText?: string;
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  footer?: ReactNode;
  mask?: boolean;
  maskClosable?: boolean;
  closeIcon?: ReactNode;
  children?: ReactNode;
}
export type { ModalProps };
