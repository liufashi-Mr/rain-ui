import React, { useState } from 'react';
import { Modal, Button, message, Space } from 'raind';
import { TaobaoCircleOutlined } from '@ant-design/icons';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [type, setType] = useState<any>();
  return (
    <div>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
            setType('info');
          }}
        >
          info
        </Button>
        <Button
          type="success"
          onClick={() => {
            setVisible(true);
            setType('success');
          }}
        >
          success
        </Button>
        <Button
          type="warning"
          onClick={() => {
            setVisible(true);
            setType('warning');
          }}
        >
          warning
        </Button>
        <Button
          type="error"
          onClick={() => {
            setVisible(true);
            setType('error');
          }}
        >
          error
        </Button>
        <Button type="primary" onClick={() => setVisible1(true)}>
          custom icon
        </Button>
      </Space>

      <Modal
        type={type}
        title={`${type} Modal`}
        visible={visible}
        confirmButtonProps={{ type: type === 'info' ? 'primary' : type }}
        onCancel={() => {
          message.success('cancel');
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

      <Modal
        icon={<TaobaoCircleOutlined style={{ color: '#ff6700', marginRight: 6 }} />}
        title="custom icon"
        visible={visible1}
        onCancel={() => {
          message.success('cancel');
          setVisible1(false);
        }}
        onConfirm={() => {
          setVisible1(false);
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
