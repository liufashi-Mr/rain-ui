import React from 'react';
import { Carousel } from 'rain-ui';

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
  return (
    <Carousel
      autoPlay
      dots
      //   beforeChange={(from, to) => {
      //     console.log(`变化前：从${from}到${to}`);
      //   }}
      //   afterChange={(c) => {
      //     console.log(`回调${c}`);
      //   }}
    >
      <div style={pageStyle}>1</div>
      <div style={pageStyle}>2</div>
      <div style={pageStyle}>3</div>
    </Carousel>
  );
};
