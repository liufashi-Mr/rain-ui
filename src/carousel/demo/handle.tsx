import React, { useRef } from 'react';
import { Button, Carousel } from 'rain-ui';

export default () => {
  const pageStyle: React.CSSProperties | undefined = {
    width: '600px',
    height: '200px',
    backgroundColor: 'rgb(54, 77, 121)',
    color: '#fff',
    fontSize: '24px',
    textAlign: 'center',
    lineHeight: '200px',
  };
  const ref = useRef<any>(null);
  return (
    <>
      <Button style={{ margin: '10px' }} onClick={() => ref?.current?.back()}>
        上一张
      </Button>
      <Button style={{ margin: '10px' }} onClick={() => ref?.current?.next()}>
        下一张
      </Button>
      <Button style={{ margin: '10px' }} onClick={() => ref?.current?.goTo(1)}>
        跳转到第二张
      </Button>
      <Carousel dots ref={ref}>
        <div style={pageStyle}>1</div>
        <div style={pageStyle}>2</div>
        <div style={pageStyle}>3</div>
      </Carousel>
    </>
  );
};
