import React from 'react';
import { Tag } from 'raind';
import { CloseCircleOutlined } from '@ant-design/icons';
const Base: React.FC<Record<string, never>> = () => {
  return (
    <>
      <div>
        <Tag
          closable
          onClose={(e) => {
            e.preventDefault();
          }}
        >
          default
        </Tag>
        <Tag icon={<CloseCircleOutlined />} color="primary">
          primary
        </Tag>
        <Tag color="success">success</Tag>
        <Tag color="warning">warning</Tag>
        <Tag color="error">error</Tag>
      </div>
      <div>
        <Tag>default</Tag>
        <Tag icon={<CloseCircleOutlined />} bordered color="primary">
          primary
        </Tag>
        <Tag bordered color="success">
          success
        </Tag>
        <Tag bordered color="warning">
          warning
        </Tag>
        <Tag bordered color="error">
          error
        </Tag>
      </div>
    </>
  );
};

export default Base;
