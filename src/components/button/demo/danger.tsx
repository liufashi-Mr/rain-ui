import React from 'react';
import { Button, Space } from 'raind';
const App: React.FC = () => {
  return (
    <Space>
      <Button danger>danger</Button>
      <Button type="dashed" danger>
        dashed
      </Button>
      <Button type="text" danger>
        text
      </Button>
      <Button type="link" danger href="http://blog.liufashi.top" target="_blank">
        link
      </Button>
      <Button disabled>danger</Button>
      <Button type="dashed" disabled>
        dashed
      </Button>
      <Button type="text" disabled>
        text
      </Button>
      <Button type="link" disabled href="http://blog.liufashi.top" target="_blank">
        link
      </Button>
    </Space>
  );
};

export default App;
