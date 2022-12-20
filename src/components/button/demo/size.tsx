import React from 'react';
import { Button, Divider } from 'raind';
import '../style/demo.less';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
const App: React.FC = () => {
  return (
    <div>
      <Divider>size</Divider>
      <Button size="small" type="primary">
        small button
      </Button>
      <Button size="default" type="success">
        default button
      </Button>
      <Button size="large" type="warning">
        large button
      </Button>
      <Divider>shape & icon</Divider>
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
      <Divider>block</Divider>
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
    </div>
  );
};

export default App;
