import React from 'react';
import '../style';

import { Button, message } from 'rain-ui';

export default () => {
  return (
    <div>
      <Button onClick={() => message.info('I am a info')}>函数式调用</Button>

      <Button onClick={() => message.error('this is an error message')}>error</Button>

      <Button onClick={() => message.success('this a success message')}>success</Button>

      <Button onClick={() => message.warning('this is a warning message')}>warning</Button>
    </div>
  );
};
