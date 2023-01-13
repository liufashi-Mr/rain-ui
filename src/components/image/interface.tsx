import type { CSSProperties, ReactNode, ReactElement, ImgHTMLAttributes } from 'react';
export type SpaceSize = 'mini' | 'small' | 'middle' | 'large';
export type SpaceDirection = 'horizontal' | 'vertical';
export type titlePlacement = 'inner' | 'nether';
interface ImageProps extends Omit<ImgHTMLAttributes<any>, 'title'> {
  /**
   * @description 布局元素
   * @default -
   */
  style?: CSSProperties;
  imageStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  className?: string;
  src?: string;
  radius?: number;
  width?: string | number;
  height?: string | number;
  title?: ReactNode;
  titlePlacement?: titlePlacement;
  titleWidth?: number;
  preview?: boolean;
  error?: string;
  previewRender?: (onPreview: () => void) => ReactNode;
  handlePreview?: () => void;
}
interface ImagePreviewProps {
  visible?: boolean;
  onClose?: () => void;
  imagePreviewSrc?: string[] | string;
  startIndex?: number;
  children?: ReactNode;
}

interface PreviewGroupProps {
  visible?: boolean;
  onClose?: () => void;
  imagePreviewSrc?: string[] | string;
  startIndex?: number;
  children?: ReactElement | ReactElement[];
}
export type { ImageProps, ImagePreviewProps, PreviewGroupProps };
