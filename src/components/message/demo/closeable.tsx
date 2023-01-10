import React from 'react';
import { Button, message, Space } from 'raind';
const App: React.FC = () => {
  return (
    <Space>
      <Button
        onClick={() =>
          message.info({
            content: 'closeable message',
            closeable: true,
          })
        }
      >
        closeable
      </Button>
      <Button
        onClick={() =>
          message.info({
            content: 'closeable message',
            closeable: true,
            onClose() {
              message.success('closed');
            },
          })
        }
      >
        closed callback
      </Button>
    </Space>
  );
};

export default App;
