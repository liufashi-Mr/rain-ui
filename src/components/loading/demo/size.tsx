import React from 'react';
import { Loading, Space } from 'raind';
const App: React.FC = () => {
  return (
    <Space size="large">
      <Loading size="small" />
      <Loading />
      <Loading size="large" />
    </Space>
  );
};

export default App;
