import React from 'react';
import { Space, Image } from 'raind';
import { EyeOutlined, DownloadOutlined } from '@ant-design/icons';
const App: React.FC = () => {
  const src =
    'https://i0.hippopx.com/photos/136/937/142/photography-the-scenery-bright-woman-preview.jpg';
  return (
    <Space size="middle">
      <Image height={150} src={src} preview />
      <Image
        height={150}
        src={src}
        preview
        previewRender={(callback) => {
          return (
            <Space>
              <EyeOutlined onClick={callback} />
              <DownloadOutlined onClick={() => window.open(src)} />
            </Space>
          );
        }}
      />
      <Image
        height={150}
        src={src}
        preview
        previewRender={(callback) => {
          return (
            <div onClick={callback}>
              <EyeOutlined onClick={callback} />
              <span style={{ fontSize: 14 }}> 预览</span>
            </div>
          );
        }}
      />
    </Space>
  );
};

export default App;
