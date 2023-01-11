import React, { forwardRef, useState } from 'react';
import type { ImageProps } from './interface';
import cls from 'classnames';
import './style/index.less';
import { EyeOutlined } from '@ant-design/icons';
import { errorfallback } from './defaultError';
import ImagePreview from './ImagePreview';
import type { ImagePreviewProps } from './ImagePreview';
const prefixCls = 'rain-image';

const Image: React.ForwardRefRenderFunction<HTMLDivElement, ImageProps> & {
  ImagePreview: (props: ImagePreviewProps) => React.ReactPortal;
} = (
  {
    width,
    height,
    title,
    description,
    titlePlacement = 'inner',
    className,
    style,
    imageStyle = {},
    titleStyle,
    error,
    preview = false,
    previewRender,
    ...rest
  },
  ref,
) => {
  const [isLoadingError, setIsLoadingError] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const imageAttributes = {
    ...rest,
    style: {
      ...imageStyle,
      width,
      height,
    },
    className: `${prefixCls}-img`,
    src: isLoadingError ? errorfallback : rest.src,
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
    <div ref={ref} style={style} className={classes}>
      <img {...imageAttributes} />
      <div className={titleClasses} style={titleStyle}>
        {titlePlacement === 'nether' && !isLoadingError && (
          <img src={rest.src} className={`${prefixCls}-title-filter`} />
        )}
        <div className={`${prefixCls}-title-text`}>{title}</div>
      </div>
      {!isLoadingError && (
        <div className={`${prefixCls}-mask`}>
          <div>{previewRender?.() || <EyeOutlined onClick={() => setPreviewVisible(true)} />}</div>
        </div>
      )}
      <ImagePreview
        visible={previewVisible}
        onClose={() => setPreviewVisible(false)}
        picList={[rest.src]}
      />
    </div>
  );
};
Image.ImagePreview = ImagePreview;
export default forwardRef<unknown, ImageProps>(Image);
