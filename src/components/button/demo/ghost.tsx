import React from 'react';
import { Button, Space } from 'raind';
const App: React.FC = () => {
  return (
    <>
      <Space style={{ paddingLeft: 24 }}>
        <Button ghost>default</Button>
        <Button ghost type="primary">
          primary
        </Button>
        <Button ghost type="success">
          success
        </Button>
        <Button ghost type="warning">
          warning
        </Button>
        <Button ghost type="error">
          error
        </Button>
        <Button ghost type="dashed">
          dashed
        </Button>
      </Space>
      <Space style={{ padding: '12px 24px', background: '#545959', marginTop: 12 }}>
        <Button ghost>default</Button>
        <Button ghost type="primary">
          primary
        </Button>
        <Button ghost type="success">
          success
        </Button>
        <Button ghost type="warning">
          warning
        </Button>
        <Button ghost type="error">
          error
        </Button>
        <Button ghost type="dashed">
          dashed
        </Button>
      </Space>
    </>
  );
};

export default App;
