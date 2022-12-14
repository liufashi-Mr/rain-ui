import React from 'react';
import { Button } from 'raind';
const App: React.FC<Record<string, never>> = () => {
  return (
    <div>
      <Button>default</Button>
      <Button type="primary">primary</Button>
      <Button>default</Button>
    </div>
  );
};

export default App;
