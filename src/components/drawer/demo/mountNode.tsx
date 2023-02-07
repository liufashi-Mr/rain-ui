import React, { useState } from 'react';
import { Button, Drawer } from 'raind';
const App: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      id="test"
      style={{
        height: 400,
        backgroundColor: '#f2f3f5',
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden auto',
      }}
    >
      <Button type="primary" onClick={() => setShow(true)} style={{ marginTop: 16 }}>
        open Drawer
      </Button>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
      <p>something content...</p>
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
  );
};

export default App;
