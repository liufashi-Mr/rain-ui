import React, { useState } from 'react';
import ImagePreview from './ImagePreview';
import type { PreviewGroupProps } from './interface';
const PreviewGroup: React.FC<PreviewGroupProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const imagePreviewSrc: string[] = [];
  const mapChildren = React.Children.map(children, (child) => {
    if (child) {
      imagePreviewSrc.push(child.props.src);
      return React.cloneElement(child, { handlePreview: () => setVisible(true) });
    }
    return child;
  });
  return (
    <>
      {mapChildren}
      <ImagePreview
        visible={visible}
        onClose={() => setVisible(false)}
        imagePreviewSrc={imagePreviewSrc.filter(Boolean)}
      />
    </>
  );
};

export default PreviewGroup;
