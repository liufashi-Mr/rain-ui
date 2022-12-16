import React from 'react';
import { Divider } from 'raind';
const App: React.FC<Record<string, never>> = () => {
  return (
    <>
      <span>rainy</span>
      <Divider type="vertical" />
      <span>sunny</span>
      <Divider type="vertical" />
      <span>cloudy</span>
    </>
  );
};

export default App;
