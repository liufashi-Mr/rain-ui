import React from 'react';
import { Space, Image, Button } from 'raind';
const { ImagePreview } = Image;
const App: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const srcList = [
    'https://images.tuyacn.com/oceanus/image/982e297b-c0a1-5ee6-8d75-1af3ca4b9c9a.jpg?imageMogr2/format/webp/thumbnail/570x548',
    'https://images.tuyacn.com/oceanus/image/e37dd30c-7ebe-5518-b9a3-e8125ca1d7ae.jpg?imageMogr2/format/webp/thumbnail/570x548',
    'https://i0.hippopx.com/photos/136/937/142/photography-the-scenery-bright-woman-preview.jpg',
  ];
  return (
    <>
      <Space>
        <Button type="primary" onClick={() => setVisible(true)}>
          预览
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
            setIndex(0);
          }}
        >
          预览第一张
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
            setIndex(2);
          }}
        >
          预览第三张
        </Button>
      </Space>
      <ImagePreview
        visible={visible}
        startIndex={index}
        imagePreviewSrc={srcList}
        onClose={() => setVisible(false)}
      />
    </>
  );
};

export default App;
