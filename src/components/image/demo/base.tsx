import React from 'react';
import { Space, Image } from 'raind';
const App: React.FC = () => {
  const src =
    'https://i0.hippopx.com/photos/136/937/142/photography-the-scenery-bright-woman-preview.jpg';
  return (
    <Space size="middle">
      <Image height={150} src={src} />
      <Image height={150} src={src} preview />
    </Space>
  );
};

export default App;
