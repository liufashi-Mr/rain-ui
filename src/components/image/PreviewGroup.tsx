import React, { useState } from 'react';
import ImagePreview from './ImagePreview';
import type { PreviewGroupProps } from './interface';
const PreviewGroup: React.FC<PreviewGroupProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const imagePreviewSrc: string[] = [];
  const mapChildren = React.Children.map(children, (child, index) => {
    if (child) {
      imagePreviewSrc.push(child.props.src);
      return React.cloneElement(child, {
        handlePreview: () => {
          setVisible(true);
          setStartIndex(index);
        },
      });
    }
    return child;
  });
  return (
    <div className="rain-image-group">
      {mapChildren}
      <ImagePreview
        visible={visible}
        startIndex={startIndex}
        onClose={() => setVisible(false)}
        imagePreviewSrc={imagePreviewSrc.filter(Boolean)}
      />
    </div>
  );
};

export default PreviewGroup;
