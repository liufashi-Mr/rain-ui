import React, { useState } from 'react';
import { Modal, Button, message, Space } from 'raind';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [asyncVisible, setAsyncVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  const submitInfo = () =>
    new Promise<any>((resolve, reject) => {
      setTimeout(
        () =>
          Math.random() > 0.5
            ? resolve({
                code: 200,
                success: true,
                data: { name: 'liu', url: 'http://blog.liufashi.top' },
              })
            : reject('something error'),
        1500,
      );
    });

  const onConfirm = () => {
    setLoading(true);
    submitInfo()
      .then((res) => {
        if (res.success) {
          message.success('submit');
          setVisible(false);
        }
      })
      .catch((err) => message.error(err))
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <Space>
        <Button type="primary" onClick={() => setVisible(true)}>
          use confirmLoading
        </Button>
        <Button type="primary" onClick={() => setAsyncVisible(true)}>
          return promise
        </Button>
      </Space>

      <Modal
        confirmLoading={loading}
        title="use confirmLoading"
        visible={visible}
        onCancel={() => setVisible(false)}
        onConfirm={onConfirm}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Modal
        title="return promise"
        visible={asyncVisible}
        onCancel={() => setAsyncVisible(false)}
        onConfirm={() => submitInfo()}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default App;
