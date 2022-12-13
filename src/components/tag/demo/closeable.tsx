import { Tag } from 'raind';
import React from 'react';

const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  alert('这下关不掉了吧！');
};

const App: React.FC = () => (
  <>
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
        alert('谁让你关闭的？');
      }}
    >
      Tag 3
    </Tag>
    <Tag closable color="primary" onClose={preventDefault}>
      Prevent Default
    </Tag>
  </>
);

export default App;
