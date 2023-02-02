import React from 'react';
import { Space, Image, Button } from 'raind';
const { ImagePreview } = Image;
const App: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const srcList = [
    'https://blog.liufashi.top/img/preview-tuya-1.webp',
    'https://blog.liufashi.top/img/preview-tuya-2.webp',
    'https://blog.liufashi.top/img/image-preview-1.jpeg',
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
