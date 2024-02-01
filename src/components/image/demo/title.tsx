import React from 'react';
import { Space, Image, Divider } from 'raind';
const App: React.FC = () => {
  const src = 'http://blog.liufashi.top/img/image-preview-1.jpeg';
  return (
    <>
      <Divider>inner title</Divider>
      <Space size="middle">
        <Image
          title="The girl took the picture"
          radius={0}
          titlePlacement="inner"
          titleStyle={{ padding: '4px 12px', fontSize: 14 }}
          height={150}
          src={src}
        />
        <Image
          title="The girl took the picture"
          titlePlacement="inner"
          titleStyle={{ padding: '4px 12px', fontSize: 14 }}
          height={150}
          src={src}
        />
        <Image
          title="The girl took the picture"
          height={150}
          src={src}
          titleStyle={{ padding: '4px 12px', fontSize: 14, textAlign: 'center' }}
          imageStyle={{ filter: 'blur(2px)' }}
        />
        <Image
          title="The girl took the picture"
          titlePlacement="inner"
          titleStyle={{ padding: '4px 12px', fontSize: 14 }}
          style={{ borderRadius: 16 }}
          height={150}
          src={src}
        />
        <Image
          title="text overflow text overflow text overflow text overflow text overflow text overflow "
          titlePlacement="inner"
          titleStyle={{ padding: '4px 12px', fontSize: 14 }}
          radius={0}
          height={150}
          src={src}
        />
      </Space>
      <Divider>nether title</Divider>
      <Image
        title="The girl took the picture"
        titlePlacement="nether"
        height={200}
        width={300}
        src={src}
      />
    </>
  );
};

export default App;
