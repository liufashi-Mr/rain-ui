import React from 'react';
import { Loading } from 'raind';
import '../style/demo.less';
const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="item">
        <Loading size="small" />
      </div>
      <div className="item">
        <Loading />
      </div>
      <div className="item">
        <Loading size="large" />
      </div>
    </div>
  );
};

export default App;
