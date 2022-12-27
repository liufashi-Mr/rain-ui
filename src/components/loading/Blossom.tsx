import React from 'react';
const Blossom: React.FC<{ classNames: string }> = ({ classNames }) => {
  return (
    <span className={classNames}>
      <i />
      <i />
      <i />
      <i />
    </span>
  );
};

export default Blossom;
