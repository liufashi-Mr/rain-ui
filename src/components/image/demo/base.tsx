import React from 'react';
import { Space, Image } from 'raind';
const App: React.FC = () => {
  const src = 'https://blog.liufashi.top/img/image-preview-1.jpeg';
  return (
    <Space size="middle">
      <Image height={150} src={src} />
      <Image height={150} src={src} preview />
    </Space>
  );
};

export default App;
