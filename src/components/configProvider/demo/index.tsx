import React, { useRef } from 'react';
import '../style/test.less';

const Comp = () => {
  const ref = useRef<any>();

  return (
    <>
      <div className="container" ref={ref} />
      <div className="container2" ref={ref} />
    </>
  );
};

export default Comp;
