import React, { useRef } from 'react';
import { Carousel } from 'raind';

export default () => {
  const pageStyle: React.CSSProperties | undefined = {
    width: '200px',
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
      <Carousel
        ref={ref}
        dots
        autoPlay
        slidesToShow={3}
        slidesToScroll={2}
        //   beforeChange={(from, to) => {
        //     console.log(`变化前：从${from}到${to}`);
        //   }}
        //   afterChange={(c) => {
        //     console.log(`回调${c}`);
        //   }}
      >
        <div style={pageStyle}>1-1</div>
        <div style={pageStyle}>1-2</div>
        <div style={pageStyle}>1-3</div>
        <div style={pageStyle}>1-4</div>

        <div style={pageStyle}>2-1</div>
        <div style={pageStyle}>2-2</div>
        <div style={pageStyle}>2-3</div>
        <div style={pageStyle}>2-4</div>
      </Carousel>
    </>
  );
};
