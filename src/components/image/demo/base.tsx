import React from 'react';
import { Space, Image, Button } from 'raind';
const { ImagePreview, PreviewGroup } = Image;
const App: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button onClick={() => setVisible((v) => !v)}>点击</Button>
      <Space>
        {/* <Image
          title="电热毛巾架智能化方案"
          titlePlacement="nether"
          width={285}
          src="https://images.tuyacn.com/oceanus/image/982e297b-c0a1-5ee6-8d75-1af3ca4b9c9a.jpg?imageMogr2/format/webp/thumbnail/570x548"
        />
        <Image
          title="电热毛巾架智能化方案"
          width={285}
          src="https://images.tuyacn.com/oceanus/image/e791b52f-db1a-5dde-8a1d-fa7d6c5b48fd.jpg?imageMogr2/format/webp/thumbnail/570x548"
        />
        <Image title="电热毛巾架智能化方案" width={285} src="" />
        <ImagePreview
          visible={visible}
          imagePreviewSrc="https://images.tuyacn.com/oceanus/image/982e297b-c0a1-5ee6-8d75-1af3ca4b9c9a.jpg?imageMogr2/format/webp/thumbnail/570x548"
          onClose={() => setVisible(false)}
        /> */}
        <PreviewGroup>
          <Image
            preview={true}
            title="电热毛巾架智能化方案"
            titlePlacement="nether"
            width={285}
            src="https://images.tuyacn.com/oceanus/image/982e297b-c0a1-5ee6-8d75-1af3ca4b9c9a.jpg?imageMogr2/format/webp/thumbnail/570x548"
          />
          <Image
            preview={true}
            title="电热毛巾架智能化方案"
            titlePlacement="nether"
            width={285}
            src="https://images.tuyacn.com/oceanus/image/982e297b-c0a1-5ee6-8d75-1af3ca4b9c9a.jpg?imageMogr2/format/webp/thumbnail/570x548"
          />
        </PreviewGroup>
      </Space>
    </>
  );
};

export default App;
