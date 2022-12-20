import React from 'react';
import { Button } from 'raind';
import '../style/demo.less';
const App: React.FC = () => {
  return (
    <div>
      <Button danger>danger</Button>
      <Button type="dashed" danger>
        dashed
      </Button>
      <Button type="text" danger>
        text
      </Button>
      <Button type="link" danger href="https://blog.liufashi.top" target="_blank">
        link
      </Button>
      <Button disabled>danger</Button>
      <Button type="dashed" disabled>
        dashed
      </Button>
      <Button type="text" disabled>
        text
      </Button>
      <Button type="link" disabled href="https://blog.liufashi.top" target="_blank">
        link
      </Button>
    </div>
  );
};

export default App;
