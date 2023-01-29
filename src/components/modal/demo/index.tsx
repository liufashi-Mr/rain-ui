import React, { useState } from 'react';
import { Modal, Button, message } from 'raind';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const submitInfo = () =>
    new Promise<any>((resolve) => {
      setTimeout(() => {
        resolve({
          code: 200,
          success: true,
          data: { name: 'liu', url: 'https://blog.liufashi.top' },
        });
      }, 3000);
    });
  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal
      </Button>
      <Modal
        confirmLoading={loading}
        title="Modal title"
        visible={visible}
        onCancel={() => setVisible(false)}
        onConfirm={() => {
          setLoading(true);
          submitInfo()
            .then((res) => {
              if (res.success) {
                message.success('submit success');
                setVisible(false);
              }
            })
            .finally(() => {
              setLoading(false);
            });
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
