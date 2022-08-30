import React from 'react';
import { Ellipsis, Tooltip } from 'raind';
import '../style/index.scss';
const text = 'Go smart and expand your smart product line today!';
export default () => (
  <div style={{ display: 'flex' }}>
    <Ellipsis style={{ width: 300 }}>{text}</Ellipsis>
    <Tooltip title={text}>
      <Ellipsis style={{ width: 300, marginLeft: 30 }}>{text}</Ellipsis>
    </Tooltip>
  </div>
);
