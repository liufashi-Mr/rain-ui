import React from 'react';
import { Space, Image } from 'raind';
const App: React.FC = () => {
  const list = [
    {
      src: 'http://blog.liufashi.top/img/preview-tuya-1.webp',
      title: '氛围灯智能化方案',
      subtitle: '本地麦克风音乐律动｜红外遥控｜自定义按键',
    },
    {
      src: 'http://blog.liufashi.top/img/preview-tuya-2.webp',
      title: '热水器智能化方案',
      subtitle: '远程控制∣语音控制∣能耗统计∣定时开关∣异常提醒∣智能场景联动',
    },
    {
      src: 'http://blog.liufashi.top/img/preview-tuya-3.webp',
      title: '3MP 卡片机方案',
      subtitle: '3MP 高清|实时视频|录像回放|人形过滤|H.265编码|双向对讲',
    },
  ];

  const overFlowStyle: React.CSSProperties = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
  return (
    <Space size="large">
      {list.map((x) => (
        <Image
          key={x.title}
          title={
            <>
              <div style={overFlowStyle}>{x.title}</div>
              <div style={{ ...overFlowStyle, fontSize: 12, marginTop: 4 }}>{x.subtitle}</div>
            </>
          }
          titlePlacement="nether"
          height={200}
          width={285}
          titleStyle={{ height: 74 }}
          src={x.src}
        />
      ))}
    </Space>
  );
};

export default App;
