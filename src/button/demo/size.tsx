import React from 'react';
import Button from '../index';
import '../style/base.scss';

export default () => (
  <div className="btnBase">
    <Button size="small">Small Button</Button>
    <Button size="default" type="primary" href="https://blog.liufashi.top" target="_blank">
      我是
    </Button>
    <Button size="default" type="primary">
      Button
    </Button>
    <Button size="large" type="primary">
      Large Button
    </Button>
    <Button shape="circle">Circle Button</Button>
    <Button shape="round">Round Button</Button>
  </div>
);
