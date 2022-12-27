import React from 'react';
const Collide: React.FC<{ classNames: string }> = ({ classNames }) => {
  return (
    <span className={classNames}>
      <i />
      <i />
      <i />
      <i />
    </span>
  );
};

export default Collide;
