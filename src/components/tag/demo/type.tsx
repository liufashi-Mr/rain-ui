import React from 'react';
import { Tag } from 'raind';
import '../style/demo.less';
const App: React.FC<Record<string, never>> = () => {
  return (
    <div>
      <Tag>default</Tag>
      <Tag bordered color="primary">
        primary
      </Tag>
      <Tag bordered color="success">
        success
      </Tag>
      <Tag bordered color="warning">
        warning
      </Tag>
      <Tag bordered color="error">
        error
      </Tag>
    </div>
  );
};

export default App;
