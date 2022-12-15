import React from 'react';
import { Tag } from 'raind';
import { Divider } from 'raind';
import '../style/demo.less';
const App: React.FC<Record<string, never>> = () => {
  return (
    <>
      <Divider orientation="left">Presets</Divider>
      <div>
        <Tag>default</Tag>
        <Tag color="primary">primary</Tag>
        <Tag color="success">success</Tag>
        <Tag color="warning">warning</Tag>
        <Tag color="error">error</Tag>
      </div>
      <Divider orientation="left">Custom</Divider>
      <div>
        <Tag color="#ff4800">#ff4800</Tag>
        <Tag color="#2db7f5">#2db7f5</Tag>
        <Tag color="#9fd4fb">#9fd4fb</Tag>
        <Tag color="#cdaff2">#cdaff2</Tag>
        <Tag color="#ffb8c4">#ffb8c4</Tag>
      </div>
    </>
  );
};

export default App;
