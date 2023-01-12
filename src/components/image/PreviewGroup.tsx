import React, { useState, useEffect } from 'react';
import ImagePreview from './ImagePreview';
import type { PreviewGroupProps } from './interface';
const PreviewGroup: React.FC<PreviewGroupProps> = ({ onClose, visible, children }) => {
  let imagePreviewSrc;
  if (Array.isArray(children)) {
    imagePreviewSrc = children.map((x) => x.props.src);
  } else {
    imagePreviewSrc = children ? (children as React.ReactElement).props.src : '';
  } 

  console.log(imagePreviewSrc);

  return (
    <>
      {children}
      <ImagePreview visible={visible} onClose={onClose} imagePreviewSrc={imagePreviewSrc} />
    </>
  );
};

export default PreviewGroup;
