import type { CSSProperties, ReactNode } from 'react';

export type SpaceSize = 'mini' | 'small' | 'middle' | 'large';
export type SpaceDirection = 'horizontal' | 'vertical';
export type titlePlacement = 'inner' | 'nether';
interface ImageProps {
  /**
   * @description 布局元素
   * @default -
   */
  style?: CSSProperties;
  imageStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  className?: string;
  src?: string;
  width?: string | number;
  height?: string | number;
  title?: ReactNode;
  titlePlacement?: titlePlacement;
  description?: string;
  preview?: boolean;
  error?: string;
  previewRender?: () => ReactNode;
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
  children?: ReactNode;
}
export type { ImageProps, ImagePreviewProps, PreviewGroupProps };
