import React from 'react';
import { Button } from 'raind';
import '../style/demo.less';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Button as AB } from 'antd';
const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Button type="primary" danger={loading}>
        primary
      </Button>
      <Button loading={loading} type="success" danger={loading}>
        success
      </Button>
      <Button type="warning">warning</Button>
      <Button onClick={() => setLoading((c) => !c)} type="error" danger={loading}>
        danger
      </Button>
      <Button danger={loading} disabled type="dashed">
        dashed
      </Button>
      <Button
        danger={loading}
        disabled
        type="link"
        href="https://blog.liufashi.top"
        target="_blank"
      >
        link
      </Button>
      <Button danger={loading} type="text">
        text
      </Button>
      <Button danger={loading} icon={<SearchOutlined />} size="small" type="primary">
        small
      </Button>
      <Button danger={loading} loading={loading}>
        default
      </Button>
      <Button icon={<SearchOutlined />} size="large">
        large
      </Button>
      <Button shape="circle" type="primary" loading={loading} size="small">
        A
      </Button>
      <Button disabled shape="round" type="primary">
        round
      </Button>
      <Button danger={loading} loading={loading} shape="round" type="primary">
        round
      </Button>
      <AB danger>12312</AB>
      <div style={{ backgroundColor: '#bec8c8' }}>
        <Button loading={loading} shape="round" danger ghost type="primary">
          ghost
        </Button>
        <Button loading={loading} shape="round" danger ghost type="dashed" size="small">
          ghost
        </Button>
      </div>
    </div>
  );
};

export default App;
