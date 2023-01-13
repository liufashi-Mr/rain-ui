import React from 'react';
import { Space, Image, Divider } from 'raind';
const App: React.FC = () => {
  const src =
    'https://i0.hippopx.com/photos/136/937/142/photography-the-scenery-bright-woman-preview.jpg';
  return (
    <>
      <Divider>inner title</Divider>
      <Space size="middle">
        <Image
          title="use radius"
          radius={0}
          titlePlacement="inner"
          titleStyle={{ padding: '4px 12px', fontSize: 14 }}
          height={150}
          src={src}
        />
        <Image
          title="use title-style"
          titlePlacement="inner"
          titleStyle={{ padding: '4px 12px', fontSize: 14 }}
          height={150}
          src={src}
        />
        <Image
          title="use image-style"
          height={150}
          src={src}
          titleStyle={{ padding: '4px 12px', fontSize: 14, textAlign: 'center' }}
          imageStyle={{ filter: 'blur(2px)' }}
        />
        <Image
          title="use style"
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
      <Image title="take photos " titlePlacement="nether" height={200} width={300} src={src} />
    </>
  );
};

export default App;
