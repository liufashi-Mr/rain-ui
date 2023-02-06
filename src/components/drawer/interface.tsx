import type { ReactNode, CSSProperties } from 'react';
import type { ButtonProps } from '../button/interface';

interface DrawerProps {
  /**
   * @description 切换抽屉时动画结束后的回调
   * @default -
   */
  afterOpenChange?: (open: boolean) => void;
  /**
   * @description 可用于设置 Drawer 内容部分的样式
   * @default -
   */
  bodyStyle?: CSSProperties;
  /**
   * @description 对话框外层容器的类名
   * @default -
   */
  className?: string;
  /**
   * @description 是否显示左上角的关闭按钮
   * @default true
   */
  closable?: boolean;
  /**
   * @description 自定义关闭图标
   * @default <CloseOutlined/>
   */
  closeIcon?: ReactNode;
  /**
   * @description 用于设置 Drawer 弹出层的样式
   * @default -
   */
  drawerStyle?: CSSProperties;
  /**
   * @description 抽屉右上角的操作区域
   * @default -
   */
  extra?: ReactNode;
  /**
   * @description 抽屉的页脚(自定义按钮确认和取消按钮，为 null 的话没有按钮组)
   * @default -
   */
  footer?: ReactNode;
  /**
   * @description 抽屉页脚部件的样式
   * @default -
   */
  footerStyle?: CSSProperties;
  /**
   * @description 指定弹出框挂载的父节点
   * @default document.body
   */
  getContainer?: HTMLElement | null;
  /**
   * @description 用于设置 Drawer 头部的样式
   * @default -
   */
  headerStyle?: CSSProperties;
  /**
   * @description 高度, 在 placement 为 top 或 bottom 时使用
   * @default 378
   */
  height?: string | number;
  /**
   * @description 是否展示遮罩
   * @default true
   */
  mask?: boolean;
  /**
   * @description 点击蒙层是否允许关闭
   * @default true
   */
  maskClosable?: boolean;
  /**
   * @description 遮罩样式
   * @default -
   */
  maskStyle?: CSSProperties;
  /**
   * @description 点击遮罩层或左上角叉或取消按钮的回调
   * @default -
   */
  onClose?: Function;
  /**
   * @description 可用于设置 Drawer 最外层容器的样式，和 drawerStyle 的区别是作用节点包括 mask
   * @default -
   */
  style?: CSSProperties;
  /**
   * @description Drawer 是否可见
   * @default -
   */
  visible?: boolean;
  /**
   * @description 宽度
   * @default 378
   */
  width?: number | string;
  /**
   * @description 标题
   * @default -
   */
  title?: ReactNode;
  /**
   * @description 标题
   * @default -
   */
  placement?: 'right' | 'left' | 'top' | 'bottom';
  /**
   * @description 设置 Drawer 的 z-index
   * @default 9999
   */
  zIndex?: number;
  /**
   * @description 确认按钮文案
   * @default 确认
   */
  okText?: ReactNode;
  /**
   * @description 确认按钮的 props
   * @default -
   */
  okButtonProps?: ButtonProps;
  /**
   * @description 点击确认按钮的回调
   * @default -
   */
  onOk?: Function;
  /**
   * @description 取消按钮文案
   * @default -
   */
  cancelText?: ReactNode;
  /**
   * @description 取消按钮的 props
   * @default -
   */
  cancelButtonProps?: ButtonProps;
  /**
   * @description 关闭弹出框的回调
   * @default -
   */
  onCancel?: Function;
  children?: ReactNode;
}
export type { DrawerProps };
