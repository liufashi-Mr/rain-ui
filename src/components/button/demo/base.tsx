import React from 'react';
import { Button } from 'raind';
import '../style/demo.less';
const App: React.FC = () => {
  return (
    <div>
      <Button type="primary">primary</Button>
      <Button type="success">success</Button>
      <Button type="warning">warning</Button>
      <Button type="error">danger</Button>
      <Button type="dashed">dashed</Button>
      <Button type="link">link</Button>
      <Button type="text">text</Button>
      <Button size="small" type="primary">
        small
      </Button>
      <Button>default</Button>
      <Button size="large">large</Button>
    </div>
  );
};

export default App;
