import React, { useState } from 'react';
import { Button, Drawer } from 'raind';
import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
const App: React.FC<Record<string, never>> = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState<any>('right');
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Radio.Group value={value} onChange={onChange}>
        <Radio value={'top'}>top</Radio>
        <Radio value={'bottom'}>bottom</Radio>
        <Radio value={'left'}>left</Radio>
        <Radio value={'right'}>right</Radio>
      </Radio.Group>
      <Button onClick={() => setShow(true)} type="primary">
        open Drawer
      </Button>
      <Drawer visible={show} title="title" onClose={() => setShow(false)} placement={value}>
        DrawerContent
      </Drawer>
    </>
  );
};

export default App;
