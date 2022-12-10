import React, { useContext } from 'react';
import '../style/test.less';
import { Button, ConfigProvider } from 'raind';
import type { ConfigProviderProps } from '../interface';
import { configCtx } from '..';

const ChildTest = () => {
  const { childrenTheme } = useContext<ConfigProviderProps>(configCtx);
  console.log(childrenTheme);

  return (
    <div
      className="container"
      style={{ backgroundColor: childrenTheme && childrenTheme['primary'] }}
    ></div>
  );
};

const Test = () => {
  return (
    <ConfigProvider globalTheme={{ primary: 'green' }} childrenTheme={{ primary: 'red' }}>
      <Button type="primary">点击</Button>
      <ChildTest />
    </ConfigProvider>
  );
};

export default Test;
