import { Tag, message, Space } from 'raind';
import React from 'react';

const App: React.FC = () => (
  <Space>
    <Tag>Tag 1</Tag>
    <Tag>
      <a href="https:blog.liufashi.top">Link</a>
    </Tag>
    <Tag closable>Tag 2</Tag>
    <Tag
      closable
      color="primary"
      bordered
      onClose={() => {
        message.warning('谁让你关闭的？');
      }}
    >
      Tag 3
    </Tag>
    <Tag
      closable
      color="primary"
      onClose={(e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        message.warning('这下关不掉了吧！');
      }}
    >
      Prevent Default
    </Tag>
  </Space>
);

export default App;
