import React, { useState } from 'react';
import { ConfigProvider, Divider, Button, Tag, Space } from 'raind';
import { ClockCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
const App: React.FC = () => {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setDark((val) => !val)}>
        {dark ? '关闭' : '开启'}深色模式
      </Button>
      <Divider>使用中性色板</Divider>
      <div style={{ padding: 24, background: dark ? '#141414' : '#ffffff', borderRadius: 8 }}>
        <ConfigProvider
          config={{
            '--rain-border-radius-base': '2px',
            '--rain-border-color-base': '#f0f0f0',
            '--rain-background-color-base': '#d9d9d9',
          }}
          local
          dark={dark}
        >
          <Space>
            <Button>default</Button>
            <Tag icon={<ClockCircleOutlined />} color="default" bordered>
              waiting
            </Tag>
            <Tag icon={<MinusCircleOutlined />} color="default" bordered>
              stop
            </Tag>
          </Space>
        </ConfigProvider>
      </div>
      <Divider>使用透明度</Divider>
      <div style={{ padding: 24, background: dark ? '#141414' : '#ffffff', borderRadius: 8 }}>
        <ConfigProvider
          config={{
            '--rain-border-radius-base': '4px',
            '--rain-border-color-base': '#00000033',
            '--rain-background-color-base': '#ffffff33',
          }}
          local
          dark={dark}
        >
          <Space>
            <Button>default</Button>
            <Tag icon={<ClockCircleOutlined />} color="default" bordered>
              waiting
            </Tag>
            <Tag icon={<MinusCircleOutlined />} color="default" bordered>
              stop
            </Tag>
          </Space>
        </ConfigProvider>
      </div>
      <Divider>默认值</Divider>
      <div style={{ padding: 24 }}>
        <Space>
          <Button>default</Button>
          <Tag icon={<ClockCircleOutlined />} color="default" bordered>
            waiting
          </Tag>
          <Tag icon={<MinusCircleOutlined />} color="default" bordered>
            stop
          </Tag>
        </Space>
      </div>
    </div>
  );
};

export default App;
