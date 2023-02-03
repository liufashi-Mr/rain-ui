import React from 'react';
import { Button, message } from 'raind';
const App: React.FC = () => {
  const fetchInfo = () =>
    new Promise<any>((resolve) => {
      setTimeout(() => {
        resolve({
          code: 200,
          success: true,
          data: { name: 'liu', url: 'https://blog.liufashi.top' },
        });
      }, 1000);
    });

  const getUserInfo = async () => {
    const hide = message.loading({
      content: 'fetching...',
      onClose() {
        message.success('fetching success');
      },
    });
    console.log(hide);
    try {
      const res = await fetchInfo();
      if (res.success) {
        hide?.();
      }
    } finally {
      hide?.();
    }
  };
  return (
    <Button type="primary" onClick={getUserInfo}>
      fetch userInfo
    </Button>
  );
};

export default App;
