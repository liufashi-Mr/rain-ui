import React from 'react';
// import { Button } from 'raind';
import '../style/base.scss';
import { Button } from 'raind';
export default () => (
  <div className="btnBase">
    <Button onClick={() => window.alert('你敢点我？')}>Default Button</Button>
    <Button type="primary">Primary Button</Button>
    <Button type="primary" radius="6">
      自定义圆角
    </Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
    <Button type="link" href="https://blog.liufashi.top">
      Link a Button
    </Button>
  </div>
);
