import React, { useState } from 'react';
import { Button, Drawer } from 'raind';
const App: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setShow(true)}>
        open Drawer
      </Button>
      <Drawer visible={show} title="title" onClose={() => setShow(false)}>
        DrawerContent
      </Drawer>
    </>
  );
};

export default App;
