import React from 'react';
import { Button, message } from 'raind';
const App: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default App;
