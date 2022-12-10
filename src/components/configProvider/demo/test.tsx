import React from 'react';
import '../style/test.less';
import { ConfigProvider } from 'raind';
import { useState } from 'react';

const Test = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ConfigProvider globalTheme={{ primary: 'aqua' }} darkTheme={isDark}>
      <div style={{ background: isDark ? '#141414' : '#fff', overflow: 'hidden' }}>
        <div className="container" />
        <button
          style={{ marginTop: 10 }}
          onClick={() => {
            setIsDark((val) => !val);
          }}
        >
          点击
        </button>
      </div>
    </ConfigProvider>
  );
};

export default Test;
