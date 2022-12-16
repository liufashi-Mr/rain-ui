import React from 'react';
import { Divider } from 'raind';
const App: React.FC<Record<string, never>> = () => {
  return (
    <>
      <p>plain文字</p>
      <Divider plain={true}>sab发狗</Divider>
      <p>分割线默认文字</p>
      <Divider plain={false}>sab发狗</Divider>
    </>
  );
};

export default App;
