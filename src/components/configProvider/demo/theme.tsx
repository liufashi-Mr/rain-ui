import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { Button, Tag, Loading, Divider, ConfigProvider, Space } from 'raind';

import {
  SyncOutlined,
  SearchOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
const App: React.FC = () => {
  const [theme, setTheme] = useState({
    primary: '#1890ff',
    success: '#52c41a',
    warning: '#faad14',
    error: '#f5222d',
  });
  const [dark, setDark] = useState(false);
  const [compact, setCompact] = useState(false);

  const handleColorChange = (val: any) => {
    setTheme((v) => ({ ...v, ...val }));
  };
  return (
    <ConfigProvider theme={theme} local dark={dark} compact={compact}>
      <div style={{ padding: 24, background: dark ? '#141414' : '#fff', borderRadius: 8 }}>
        <Space direction="vertical" spaceItemStyle={{ width: 400 }}>
          <Button type="primary" block onClick={() => setDark((val) => !val)}>
            {dark ? '关闭' : '开启'}深色模式
          </Button>
          <Button type="primary" block onClick={() => setCompact((val) => !val)}>
            {compact ? '关闭' : '开启'}紧凑模式
          </Button>
        </Space>

        <div style={{ display: 'flex' }}>
          <Space>
            <div>
              <Divider>primary color</Divider>
              <SketchPicker
                width="150px"
                color={theme.primary}
                presetColors={['#1890ff', '#AC18FF', '#ff6700']}
                onChange={({ hex }) => {
                  const val = { primary: hex };
                  handleColorChange(val);
                }}
              />
            </div>
            <div>
              <Divider>success color</Divider>
              <SketchPicker
                width="150px"
                color={theme.success}
                presetColors={['#52c41a']}
                onChange={({ hex }) => {
                  const val = { success: hex };
                  handleColorChange(val);
                }}
              />
            </div>
            <div>
              <Divider>warning color</Divider>
              <SketchPicker
                width="150px"
                color={theme.warning}
                presetColors={['#faad14']}
                onChange={({ hex }) => {
                  const val = { warning: hex };
                  handleColorChange(val);
                }}
              />
            </div>
            <div>
              <Divider>error color</Divider>
              <SketchPicker
                width="150px"
                color={theme.error}
                presetColors={['#f5222d']}
                onChange={({ hex }) => {
                  const val = { error: hex };
                  handleColorChange(val);
                }}
              />
            </div>
          </Space>
        </div>
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
      </div>
    </ConfigProvider>
  );
};

export default App;
