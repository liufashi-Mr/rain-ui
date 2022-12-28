import React from 'react';
import { Button, message } from 'raind';
import Message from '..';
const App: React.FC<Record<string, never>> = () => {
  return (
    <>
      <Message type="success" closeable content="这是一条成功消息提示" />
      {/* <Message type="info" />
        <Message type="error" />
        <Message type="warning" />
        <Message type="loading" /> */}

      <Button type="primary" onClick={() => message.info({ content: '123123' })}>
        message
      </Button>
    </>
  );
};

export default App;
