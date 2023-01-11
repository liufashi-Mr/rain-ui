import React from 'react';
import { Tag, Space } from 'raind';
const App: React.FC<Record<string, never>> = () => {
  return (
    <Space>
      <Tag>default</Tag>
      <Tag bordered color="primary">
        primary
      </Tag>
      <Tag bordered color="success">
        success
      </Tag>
      <Tag bordered color="warning">
        warning
      </Tag>
      <Tag bordered color="error">
        error
      </Tag>
    </Space>
  );
};

export default App;
