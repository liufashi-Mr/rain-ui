import React from 'react';
import { Tooltip } from 'rain-ui';
import '../style';

export default () => (
  <Tooltip placement="top" title="prompt text">
    <span style={{ fontSize: 14 }}>Tooltip will show when mouse enter.</span>
  </Tooltip>
);
