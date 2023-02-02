import React from 'react';
import { Space, Image } from 'raind';
import { EyeOutlined, DownloadOutlined } from '@ant-design/icons';
const App: React.FC = () => {
  const src = 'https://blog.liufashi.top/img/image-preview-1.jpeg';
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
