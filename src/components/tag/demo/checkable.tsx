import React from 'react';
import { Tag, message, Space } from 'raind';
const App: React.FC = () => {
  const weathers = ['rainy', 'sunny', 'snowy', 'cloudy'];
  return (
    <Space>
      <span style={{ marginRight: 8 }}>The weather now is :</span>
      <Space>
        {weathers.map((x) => (
          <Tag
            key={x}
            checkable
            defaultChecked={x === 'rainy'}
            onChecked={(checked, value) => {
              message.success(`您${checked ? '选中' : '取消'}了${value}`);
            }}
          >
            {x}
          </Tag>
        ))}
      </Space>
    </Space>
  );
};

export default App;
