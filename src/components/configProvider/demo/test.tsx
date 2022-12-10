import React from 'react';
import '../style/test.less';
import { Button, ConfigProvider } from 'raind';
import { useState } from 'react';

const Test = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ConfigProvider globalTheme={{ primary: 'green' }} darkTheme={isDark}>
      <div style={{ background: isDark ? '#141414' : '#fff', overflow: 'hidden' }}>
        <div className="container"></div>
        <Button
          style={{ marginTop: 10 }}
          type="primary"
          onClick={() => {
            setIsDark((val) => !val);
          }}
        >
          点击
        </Button>
      </div>
    </ConfigProvider>
  );
};

export default Test;
