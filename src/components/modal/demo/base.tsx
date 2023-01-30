import React, { useState } from 'react';
import { Modal, Button, message } from 'raind';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal
      </Button>
      <Modal
        title="Modal title"
        visible={visible}
        onCancel={() => {
          message.success('closed');
          setVisible(false);
        }}
        onConfirm={() => {
          setVisible(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default App;
