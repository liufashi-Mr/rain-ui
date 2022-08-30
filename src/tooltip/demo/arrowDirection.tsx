import React from 'react';
import { Tooltip, Button } from 'raind';
import '../style';

export default () => (
  <div>
    <Tooltip placement="topLeft" title="Prompt Text">
      <Button type="primary">Align edge / 边缘对齐</Button>
    </Tooltip>
    <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
      <Button type="primary" style={{ marginLeft: 15 }}>
        Arrow points to center / 箭头指向中心
      </Button>
    </Tooltip>
  </div>
);
