import type { CSSProperties, ReactNode, ReactElement, ImgHTMLAttributes } from 'react';
export type SpaceSize = 'mini' | 'small' | 'middle' | 'large';
export type SpaceDirection = 'horizontal' | 'vertical';
export type titlePlacement = 'inner' | 'nether';
interface ImageProps extends Omit<ImgHTMLAttributes<any>, 'title'> {
  /**
   * @description 最外层容器样式
   * @default -
   */
  style?: CSSProperties;
  /**
   * @description 图片样式
   * @default -
   */
  imageStyle?: CSSProperties;
  /**
   * @description 标题样式
   * @default padding: 16px 20px;
   */
  titleStyle?: CSSProperties;
  /**
   * @description 外层容器类名
   * @default
   */
  className?: string;
  /**
   * @description 图片src
   * @default
   */
  src?: string;
  /**
   * @description 图片圆角
   * @default 8px
   */
  radius?: number;
  /**
   * @description 图片宽度
   * @default 图片尺寸
   */
  width?: string | number;
  /**
   * @description 图片高度
   * @default 图片尺寸
   */
  height?: string | number;
  /**
   * @description 图片描述
   * @default -
   */
  title?: ReactNode;
  /**
   * @description 图片描述位置
   * @default inner
   */
  titlePlacement?: titlePlacement;
  /**
   * @description 图片描述文字宽度，文字超长是使用
   * @default inner
   */
  titleWidth?: number;
  /**
   * @description 预览模式
   * @default false
   */
  preview?: boolean;
  /**
   * @description 加载失败显示的图片src
   * @default rain-ui内置图片
   */
  error?: string;
  /**
   * @description 自定义遮罩层操作栏
   * @default <EyeOutlined/>
   */
  previewRender?: (onPreview: () => void) => ReactNode;
  handlePreview?: () => void;
}
interface ImagePreviewProps {
  visible?: boolean;
  onClose?: () => void;
  imagePreviewSrc?: string[] | string;
  startIndex?: number;
}

interface PreviewGroupProps {
  children?: ReactElement | ReactElement[];
}
export type { ImageProps, ImagePreviewProps, PreviewGroupProps };
