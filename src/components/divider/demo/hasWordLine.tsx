import React from 'react';
import { Divider } from 'raind';
const App: React.FC<Record<string, never>> = () => {
  return (
    <>
      文字中间
      <Divider>text</Divider>
      文字在左边
      <Divider orientation="left">left text</Divider>
      文字在右边且距离右边100px
      <Divider orientation="right" orientationMargin={100}>
        right witd 100px orientationMargin{' '}
      </Divider>
    </>
  );
};

export default App;
