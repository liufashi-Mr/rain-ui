import React from 'react';
import { Loading, Divider } from 'raind';
import { LoadingOutlined } from '@ant-design/icons';
import '../style/demo.less';
const App: React.FC = () => {
  return (
    <>
      <Divider>spin</Divider>
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
      <Divider>blossom</Divider>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="item">
          <Loading type="blossom" size="small" />
        </div>
        <div className="item">
          <Loading type="blossom" />
        </div>
        <div className="item">
          <Loading type="blossom" size="large" />
        </div>
      </div>
      <Divider>collide</Divider>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="item">
          <Loading type="collide" size="small" />
        </div>
        <div className="item">
          <Loading type="collide" />
        </div>
        <div className="item">
          <Loading type="collide" size="large" />
        </div>
      </div>
      <Divider>custom</Divider>
      <div className="item">
        <Loading indicator={<LoadingOutlined style={{ fontSize: 24 }} />} />
      </div>
    </>
  );
};

export default App;
