import React from 'react';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Tag } from 'raind';
import { Divider } from 'antd';
import '../style/demo.less';
const App: React.FC = () => (
  <>
    <Divider orientation="left">Without bordered</Divider>
    <div>
      <Tag icon={<CheckCircleOutlined />} color="success">
        success
      </Tag>
      <Tag icon={<SyncOutlined spin />} color="primary">
        primary
      </Tag>
      <Tag icon={<CloseCircleOutlined />} color="error">
        error
      </Tag>
      <Tag icon={<ExclamationCircleOutlined />} color="warning">
        warning
      </Tag>
    </div>
    <Divider orientation="left">With bordered</Divider>
    <div>
      <Tag icon={<CheckCircleOutlined />} color="success" bordered>
        success
      </Tag>
      <Tag icon={<SyncOutlined spin />} color="primary" bordered>
        primary
      </Tag>
      <Tag icon={<CloseCircleOutlined />} color="error" bordered>
        error
      </Tag>
      <Tag icon={<ExclamationCircleOutlined />} color="warning" bordered>
        warning
      </Tag>
      <Tag icon={<ClockCircleOutlined />} color="default" bordered>
        waiting
      </Tag>
      <Tag icon={<MinusCircleOutlined />} color="default" bordered>
        stop
      </Tag>
    </div>
  </>
);

export default App;
