import React from 'react';
import { Button, Tag, Loading, Divider } from 'raind';
import { Space } from 'antd';
import {
  SyncOutlined,
  SearchOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
const App: React.FC = () => {
  return (
    <div style={{ marginTop: 24 }}>
      <Divider>primary color components</Divider>
      <Space>
        <Button type="primary">button</Button>
        <Button type="primary" shape="circle">
          <SearchOutlined />
        </Button>
        <Button loading type="primary">
          loading button
        </Button>
        <Button loading type="primary" shape="circle">
          <SearchOutlined />
        </Button>
        <Tag color="primary">tag</Tag>
        <Tag icon={<SyncOutlined spin />} color="primary" bordered>
          bordered tag
        </Tag>
      </Space>
      <br />
      <Space style={{ marginTop: 24 }} size="large">
        <Loading />
        <Loading type="collide" />
        <Loading type="blossom" />
      </Space>
      <Divider>success color components</Divider>
      <Space>
        <Button type="success">button</Button>
        <Button type="success" shape="circle">
          <SearchOutlined />
        </Button>
        <Button loading type="success">
          loading button
        </Button>
        <Button loading type="success" shape="circle">
          <SearchOutlined />
        </Button>
        <Tag color="success">tag</Tag>
        <Tag icon={<CheckCircleOutlined />} color="success" bordered>
          bordered tag
        </Tag>
      </Space>
      <Divider>warning color components</Divider>
      <Space>
        <Button type="warning">button</Button>
        <Button type="warning" shape="circle">
          <SearchOutlined />
        </Button>
        <Button loading type="warning">
          loading button
        </Button>
        <Button loading type="warning" shape="circle">
          <SearchOutlined />
        </Button>
        <Tag color="warning">tag</Tag>
        <Tag icon={<ExclamationCircleOutlined />} color="warning" bordered>
          bordered tag
        </Tag>
      </Space>
      <Divider>error color components</Divider>
      <Space>
        <Button type="error">button</Button>
        <Button type="error" shape="circle">
          <SearchOutlined />
        </Button>
        <Button loading type="error">
          loading button
        </Button>
        <Button loading type="error" shape="circle">
          <SearchOutlined />
        </Button>
        <Tag color="error">tag</Tag>
        <Tag icon={<CloseCircleOutlined />} color="error" bordered>
          bordered tag
        </Tag>
      </Space>
    </div>
  );
};

export default App;
