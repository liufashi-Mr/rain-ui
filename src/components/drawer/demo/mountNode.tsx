import React, { useState } from 'react';
import { Button, Drawer } from 'raind';
const App: React.FC<Record<string, never>> = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        id="test"
        style={{
          height: 200,
          backgroundColor: '#f2f3f5',
          overflow: 'hidden',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <Button type="primary" onClick={() => setShow(true)} style={{ marginTop: 16 }}>
          open Drawer
        </Button>
        <Drawer
          visible={show}
          title="title"
          footer={null}
          getContainer={document.getElementById('test')}
          onClose={() => setShow(false)}
        >
          DrawerContent
        </Drawer>
      </div>
    </>
  );
};

export default App;
