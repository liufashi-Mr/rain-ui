export type ButtonType = 'default' | 'primary' | 'dashed' | 'text' | 'link';
export type ButtonSize = 'small' | 'default' | 'large';
export type ButtonShape = 'circle' | 'round';
export type ButtonHTMLType = 'submit' | 'button' | 'reset';
export interface BaseButtonProps {
  /**
   * @description       Button的类型
   * @type              default、primary、ghost、dashed、text、link
   * @default           default
   */
  type?: ButtonType;
  /**
   * @description       Button的大小
   * @type              small、default、large
   * @default           default
   */
  size?: ButtonSize;
  /**
   * @description       Button的形状
   * @type              circle、round
   * @default           -
   */
  shape?: ButtonShape;
  /**
   * @description       Button的圆角
   * @type
   * @default           2px
   */
  radius?: string;
  /**
   * @description       内联样式
   * @default           -
   */
  style?: React.CSSProperties;
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
   * @default           -
   */
  target?: string;
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

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
