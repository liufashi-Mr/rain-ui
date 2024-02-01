import React from 'react';
import { Space, Image } from 'raind';
const App: React.FC = () => {
  return (
    <Space size="middle">
      <Image height={150} src="error" />
      <Image height={150} src="error" error="http://blog.liufashi.top/img/footer-box/5.jpg" />
    </Space>
  );
};

export default App;
