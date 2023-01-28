import React, { useState } from 'react';
import type { ImageProps } from './interface';
import cls from 'classnames';
import './style/index.less';
import { EyeOutlined } from '@ant-design/icons';
import { errorFallback } from './defaultError';
import ImagePreview from './ImagePreview';
import PreviewGroup from './PreviewGroup';

const prefixCls = 'rain-image';

export interface CompositionImage<T> extends React.FC<T> {
  PreviewGroup: typeof PreviewGroup;
  ImagePreview: typeof ImagePreview;
}
const Image: CompositionImage<ImageProps> = ({
  width,
  height,
  title,
  titlePlacement = 'inner',
  className,
  style,
  titleWidth,
  imageStyle = {},
  titleStyle,
  radius,
  error,
  preview = false,
  previewRender,
  handlePreview,
  ...rest
}) => {
  const [isLoadingError, setIsLoadingError] = useState(false);
  const [visible, setVisible] = useState(false);
  const imageAttributes = {
    ...rest,
    style: {
      ...imageStyle,
      width,
      height,
    },
    className: `${prefixCls}-img`,
    src: isLoadingError ? error || errorFallback : rest.src,
    onError() {
      setIsLoadingError(true);
    },
  };
  const classes = cls(prefixCls, className);
  const titleClasses = cls({
    [`${prefixCls}-title-${titlePlacement}`]: title && titlePlacement,
    [`${prefixCls}-title`]: title,
  });

  return (
    <div style={{ borderRadius: radius, ...style }} className={classes}>
      <img {...imageAttributes} />
      {title && (
        <div className={titleClasses} style={{ width: width || style?.width, ...titleStyle }}>
          {titlePlacement === 'nether' && !isLoadingError && (
            <img src={rest.src} className={`${prefixCls}-title-filter`} />
          )}
          <div className={`${prefixCls}-title-text`}>{title}</div>
        </div>
      )}
      {!isLoadingError && preview && (
        <div className={`${prefixCls}-mask`}>
          {previewRender ? (
            previewRender(() => (handlePreview ? handlePreview() : setVisible(true)))
          ) : (
            <EyeOutlined onClick={() => (handlePreview ? handlePreview() : setVisible(true))} />
          )}
        </div>
      )}
      <ImagePreview
        visible={visible}
        onClose={() => setVisible(false)}
        imagePreviewSrc={rest.src}
      />
    </div>
  );
};

Image.ImagePreview = ImagePreview;
Image.PreviewGroup = PreviewGroup;
export default Image;
