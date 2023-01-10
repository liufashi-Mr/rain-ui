import React from 'react';
import { Button, Divider, Space } from 'raind';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div>
        <Button onClick={() => setLoading((v) => !v)} type="primary">
          点 我
        </Button>
      </div>
      <Divider>base</Divider>
      <Space>
        <Button loading={loading}>default</Button>
        <Button loading={loading} type="primary">
          primary
        </Button>
        <Button loading={loading} type="success">
          success
        </Button>
        <Button loading={loading} type="warning">
          warning
        </Button>
        <Button loading={loading} type="error">
          error
        </Button>
        <Button loading={loading} type="dashed">
          dashed
        </Button>
      </Space>
      <Divider>size</Divider>
      <Space>
        <Button loading={loading} size="small">
          small
        </Button>
        <Button loading={loading} size="small" type="primary">
          small
        </Button>
        <Button loading={loading}>default</Button>
        <Button loading={loading} type="primary">
          default
        </Button>
        <Button loading={loading} size="large">
          large
        </Button>
        <Button loading={loading} size="large" type="primary">
          large
        </Button>
      </Space>
      <Divider>shape</Divider>
      <Space>
        <Button shape="circle" type="primary" loading={loading}>
          <SearchOutlined />
        </Button>
        <Button loading={loading} shape="round" type="primary">
          round
        </Button>
        <Button loading={loading} radius="10" type="primary">
          radius
        </Button>
      </Space>
      <Divider>ghost</Divider>
      <Space style={{ padding: '12px 24px', background: '#545959', marginTop: 12 }}>
        <Button loading={loading} ghost>
          default
        </Button>
        <Button loading={loading} ghost type="primary">
          primary
        </Button>
        <Button loading={loading} ghost type="success">
          success
        </Button>
        <Button loading={loading} ghost type="warning">
          warning
        </Button>
        <Button loading={loading} ghost type="error">
          error
        </Button>
        <Button loading={loading} ghost type="dashed">
          dashed
        </Button>
      </Space>
    </>
  );
};

export default App;
