import React from 'react';
import { Space, Button, Divider, Tag } from 'raind';
import { Radio } from 'antd';
import type { SpaceAlign } from '../interface';

const App: React.FC = () => {
  const [align, setAlign] = React.useState<SpaceAlign>('center');

  return (
    <>
      <Radio.Group value={align} onChange={(e) => setAlign(e.target.value)}>
        <Radio value="center">center</Radio>
        <Radio value="start">start</Radio>
        <Radio value="end">end</Radio>
        <Radio value="baseline">baseline</Radio>
      </Radio.Group>
      <Divider>horizontal</Divider>
      <Space align={align}>
        <Button type="primary">Primary</Button>
        <Button size="small" type="success">
          Primary
        </Button>
        Space
        <Button size="large" type="error">
          Primary
        </Button>
        <Button type="warning">Primary</Button>
        <Tag color="primary" bordered>
          Primary
        </Tag>
      </Space>
      <Divider>vertical</Divider>
      <Space align={align} direction="vertical" style={{ width: 300 }}>
        <Button type="primary">Primary</Button>
        <Button size="small" type="success">
          Primary
        </Button>
        Space
        <Button size="large" type="error">
          Primary
        </Button>
        <Button type="warning">Primary</Button>
        <Tag color="primary" bordered>
          Primary
        </Tag>
      </Space>
    </>
  );
};

export default App;
