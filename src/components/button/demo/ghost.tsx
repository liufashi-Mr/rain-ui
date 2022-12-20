import React from 'react';
import { Button } from 'raind';
import '../style/demo.less';
const App: React.FC = () => {
  return (
    <>
      <div style={{ paddingLeft: 24 }}>
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
      </div>
      <div className="bg">
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
      </div>
    </>
  );
};

export default App;
