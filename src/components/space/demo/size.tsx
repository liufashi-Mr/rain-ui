import React, { useState } from 'react';
import { Radio } from 'antd';
import { Button, Space, Divider, Tag } from 'raind';
import type { SpaceSize } from '../interface';

const App: React.FC = () => {
  const [size, setSize] = useState<SpaceSize | string[]>('small');

  return (
    <>
      <Divider>preset size</Divider>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio value="small">Small</Radio>
        <Radio value="middle">Middle</Radio>
        <Radio value="large">Large</Radio>
      </Radio.Group>
      <br />
      <br />
      <Space size={size}>
        <Button type="primary">Primary</Button>
        <Button type="success">Primary</Button>
        Space
        <Button type="error">Primary</Button>
        <Button type="warning">Primary</Button>
        <Tag color="primary" bordered>
          Primary
        </Tag>
      </Space>
      <Divider>custom size</Divider>
      <Space size={['24px', '16px']} style={{ width: 300 }}>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        Space
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Tag color="primary" bordered>
          Primary
        </Tag>
      </Space>
    </>
  );
};

export default App;
