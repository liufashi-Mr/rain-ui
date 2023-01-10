import React from 'react';
import { Loading, Divider, Space } from 'raind';
import { LoadingOutlined } from '@ant-design/icons';
const App: React.FC = () => {
  return (
    <>
      <Divider>spin</Divider>
      <Space size="large">
        <Loading size="small" />
        <Loading />
        <Loading size="large" />
      </Space>
      <Divider>blossom</Divider>
      <Space size="large">
        <Loading type="blossom" size="small" />
        <Loading type="blossom" />
        <Loading type="blossom" size="large" />
      </Space>
      <Divider>collide</Divider>
      <Space size="large">
        <Loading type="collide" size="small" />
        <Loading type="collide" />
        <Loading type="collide" size="large" />
      </Space>
      <Divider>custom</Divider>
      <Space size="large">
        <Loading indicator={<LoadingOutlined style={{ fontSize: 12 }} />} />
        <Loading indicator={<LoadingOutlined style={{ fontSize: 24 }} />} />
        <Loading indicator={<LoadingOutlined style={{ fontSize: 36 }} />} />
      </Space>
    </>
  );
};

export default App;
