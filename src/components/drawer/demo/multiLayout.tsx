import React, { useState } from 'react';
import { Button, Drawer } from 'raind';
const App: React.FC = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setShow(true)}>
        open Drawer
      </Button>
      <Drawer width={500} visible={show} title="title" onClose={() => setShow(false)}>
        <Button type="primary" onClick={() => setShow1(true)}>
          open Drawer
        </Button>
      </Drawer>
      <Drawer width={300} visible={show1} title="title" onClose={() => setShow1(false)}>
        DrawerContent
      </Drawer>
    </>
  );
};

export default App;
