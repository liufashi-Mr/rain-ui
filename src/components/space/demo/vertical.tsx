import React from 'react';
import { Space, Button } from 'raind';
const App: React.FC = () => {
  return (
    <Space direction="vertical" style={{ width: 300 }}>
      Space
      <Button type="primary">Button</Button>
      <Button type="primary">Button</Button>
      <Button type="primary">Button</Button>
    </Space>
  );
};

export default App;
