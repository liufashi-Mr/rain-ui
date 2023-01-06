import React from 'react';
import { Tag } from 'raind';
import { message } from 'antd';
import '../style/demo.less';
const App: React.FC = () => {
  const weathers = ['rainy', 'sunny', 'snowy', 'cloudy'];
  return (
    <div>
      <span style={{ marginRight: 8 }}>The weather now is :</span>
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
    </div>
  );
};

export default App;
