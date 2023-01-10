import React from 'react';
import { Button, Divider, Space } from 'raind';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
const App: React.FC = () => {
  return (
    <div>
      <Divider>size</Divider>
      <Space>
        <Button size="small" type="primary">
          small button
        </Button>
        <Button size="default" type="success">
          default button
        </Button>
        <Button size="large" type="warning">
          large button
        </Button>
      </Space>
      <Divider>shape & icon</Divider>
      <Space>
        <Button shape="circle" size="small" type="primary">
          A
        </Button>
        <Button shape="circle" type="primary">
          <SearchOutlined />
        </Button>
        <Button shape="circle" size="large" type="primary">
          <SearchOutlined />
        </Button>
        <Button shape="round" icon={<SearchOutlined />} type="primary">
          round button
        </Button>
        <Button radius="10" type="primary">
          custom radius
        </Button>
        <Button icon={<DownloadOutlined />} type="primary">
          Download
        </Button>
        <Button icon={<SearchOutlined />}>button</Button>
      </Space>
      <Divider>block</Divider>
      <Space direction="vertical" spaceItemStyle={{ width: 400 }}>
        <Button block>default</Button>
        <Button block type="primary">
          primary
        </Button>
        <Button block type="success">
          success
        </Button>
        <Button block type="warning">
          warning
        </Button>
        <Button block type="error">
          error
        </Button>
        <Button block type="dashed">
          dashed
        </Button>
      </Space>
    </div>
  );
};

export default App;
