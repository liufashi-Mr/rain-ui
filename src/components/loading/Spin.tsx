import React from 'react';
const Spin: React.FC<{ classNames: string }> = ({ classNames }) => {
  return (
    <span className={classNames}>
      <i />
      <i />
      <i />
      <i />
      <i />
      <i />
      <i />
      <i />
    </span>
  );
};

export default Spin;
