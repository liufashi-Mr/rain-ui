import React from 'react';
import { Divider } from 'raind';
const App: React.FC<Record<string, never>> = () => {
  return (
    <>
      文字中间
      <Divider>Text</Divider>
      文字在左边
      <Divider orientation="left">Left text</Divider>
      文字在右边且距离右边100px
      <Divider orientation="right" orientationMargin={100}>
        right width 100px orientationMargin
      </Divider>
    </>
  );
};

export default App;
