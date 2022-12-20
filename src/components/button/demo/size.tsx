import React from 'react';
import { Button } from 'raind';
import '../style/demo.less';
const App: React.FC = () => {
  return (
    <div>
      <Button>default</Button>
      <Button type="primary">primary</Button>
      <Button type="success">success</Button>
      <Button type="warning">warning</Button>
      <Button type="error">error</Button>
      <Button type="dashed">dashed</Button>
      <Button type="text">text</Button>
      <Button type="link" href="https://blog.liufashi.top" target="_blank">
        link
      </Button>
    </div>
  );
};

export default App;
