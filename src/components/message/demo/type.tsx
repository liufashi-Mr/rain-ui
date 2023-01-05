import React from 'react';
import { Button, message } from 'raind';
const App: React.FC = () => {
  return (
    <>
      <Button type="primary" onClick={() => message.info('info message')}>
        info
      </Button>
      <Button type="success" onClick={() => message.success('success message')}>
        success
      </Button>
      <Button type="warning" onClick={() => message.warning('warning message')}>
        warning
      </Button>
      <Button type="error" onClick={() => message.error('error message')}>
        error
      </Button>
      <Button onClick={() => message.loading('default loading (10s)')}>
        default loading (10s)
      </Button>
      <Button
        onClick={() =>
          message.loading({
            content: 'loading duration',
            duration: 3000,
          })
        }
      >
        loading duration
      </Button>
    </>
  );
};

export default App;
