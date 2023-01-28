import React from 'react';
import { Space, Image } from 'raind';
const App: React.FC = () => {
  const list = [
    {
      src: 'https://images.tuyacn.com/oceanus/image/e37dd30c-7ebe-5518-b9a3-e8125ca1d7ae.jpg?imageMogr2/format/webp/thumbnail/570x548',
      title: '氛围灯智能化方案',
      subtitle: '本地麦克风音乐律动｜红外遥控｜自定义按键',
    },
    {
      src: 'https://images.tuyacn.com/oceanus/image/e2a8e52c-8a3f-526a-a62b-ad9338a7082e.jpg?imageMogr2/format/webp/thumbnail/570x548',
      title: '热水器智能化方案',
      subtitle: '远程控制∣语音控制∣能耗统计∣定时开关∣异常提醒∣智能场景联动',
    },
    {
      src: 'https://images.tuyacn.com/oceanus/image/e791b52f-db1a-5dde-8a1d-fa7d6c5b48fd.jpg?imageMogr2/format/webp/thumbnail/570x548',
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
