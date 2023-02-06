import React, { useState } from 'react';
import { Button, Drawer } from 'raind';
import { Checkbox } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
const App: React.FC = () => {
  const [show, setShow] = useState(false);
  const [isExist, setIsExist] = useState<any[]>([]);
  const onChange = (list: CheckboxValueType[]) => {
    setIsExist(list);
  };
  return (
    <>
      <Checkbox.Group
        onChange={onChange}
        options={['hide title', 'hide footer', 'hide close icon']}
      />
      <Button type="primary" onClick={() => setShow(true)}>
        open Drawer
      </Button>
      <Drawer
        visible={show}
        title={!isExist.includes('hide title') ? 'title' : null}
        footer={!isExist.includes('hide footer') ? 'footer' : null}
        closable={!isExist.includes('hide close icon')}
        onClose={() => setShow(false)}
      >
        DrawerContent
      </Drawer>
    </>
  );
};

export default App;
