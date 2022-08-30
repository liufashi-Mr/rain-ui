import React from 'react';
import { Button, Loading } from 'rain-ui';

export default () => {
  let t: any = null;
  const showLoading = () => {
    t && clearTimeout(t);
    Loading.show({ text: '加载中' });
    t = setTimeout(() => {
      Loading.hide();
    }, 3000);
  };
  return (
    <>
      <Button style={{ marginRight: '20px' }} onClick={showLoading}>
        show loading 三秒后消失
      </Button>
    </>
  );
};
