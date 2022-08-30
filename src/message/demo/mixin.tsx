import React from 'react';
import '../style';

import { Button, message } from 'raind';

export default () => {
  const error = () => {
    message.error({
      key: 'mixin',
      top: 100,
      duration: 0,
      style: { color: 'green' },
      content: '黄色',
    });
  };
  return (
    <div>
      <Button onClick={error}>Mixin</Button>
      <Button type="dashed" onClick={() => message.destroy('mixin')} style={{ marginLeft: 8 }}>
        关闭message
      </Button>
    </div>
  );
};
