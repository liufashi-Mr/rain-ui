import React from 'react';
import { Carousel } from 'raind';

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
    <Carousel autoPlay dots arrows>
      <div style={pageStyle}>1</div>
      <div style={pageStyle}>2</div>
      <div style={pageStyle}>3</div>
    </Carousel>
  );
};
