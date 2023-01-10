import React from 'react';
import { Tag, Divider, Space } from 'raind';
const App: React.FC<Record<string, never>> = () => {
  return (
    <>
      <Divider orientation="left">Presets</Divider>
      <Space>
        <Tag>default</Tag>
        <Tag color="primary">primary</Tag>
        <Tag color="success">success</Tag>
        <Tag color="warning">warning</Tag>
        <Tag color="error">error</Tag>
      </Space>
      <Divider orientation="left">Custom</Divider>
      <Space>
        <Tag color="#ff4800">#ff4800</Tag>
        <Tag color="#2db7f5">#2db7f5</Tag>
        <Tag color="#9fd4fb">#9fd4fb</Tag>
        <Tag color="#cdaff2">#cdaff2</Tag>
        <Tag color="#ffb8c4">#ffb8c4</Tag>
      </Space>
    </>
  );
};

export default App;
