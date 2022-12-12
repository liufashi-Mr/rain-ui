import React from 'react';
import { ConfigProvider } from 'raind';
import { useState } from 'react';
import Comp from '.';
const Test = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ConfigProvider dark={isDark}>
      <div style={{ background: isDark ? '#141414' : '#fff', overflow: 'hidden' }}>
        <Comp />
        <button
          style={{ marginTop: 10 }}
          onClick={() => {
            setIsDark((val) => !val);
          }}
        >
          点击
        </button>
        <ConfigProvider
          theme={{ primary: 'green' }}
          config={{ '--rain-border-radius-base': '6px' }}
          dark={isDark}
        >
          <Comp />
        </ConfigProvider>
      </div>
    </ConfigProvider>
  );
};

export default Test;
