import React from 'react';
import '../style';

import { Button, message } from 'raind';

const Context = React.createContext({ name: '我是Context' });

export default () => {
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.open({
      type: 'success',
      content: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      duration: 1,
    });
  };
  return (
    <Context.Provider value={{ name: 'raind' }}>
      {contextHolder}
      <Button onClick={info}>Hook && Context</Button>
    </Context.Provider>
  );
};
