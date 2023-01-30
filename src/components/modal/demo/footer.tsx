import React, { useState } from 'react';
import { Modal, Button, Space } from 'raind';

const App: React.FC = () => {
  const [disabledVisible, setDisabledVisible] = useState(false);
  const [withoutVisible, setWithOutVisible] = useState(false);
  const [customVisible, setCustomVisible] = useState(false);

  return (
    <>
      <Space>
        <Button type="primary" onClick={() => setDisabledVisible(true)}>
          disabled footer
        </Button>
        <Button type="primary" onClick={() => setWithOutVisible(true)}>
          without footer
        </Button>
        <Button type="primary" onClick={() => setCustomVisible(true)}>
          custom footer
        </Button>
      </Space>
      <Modal
        title="disabled footer"
        visible={disabledVisible}
        onCancel={() => setDisabledVisible(false)}
        onConfirm={() => setDisabledVisible(false)}
        confirmButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}
      >
        <p>something import</p>
        <p>no assess</p>
      </Modal>
      <Modal
        title="without footer"
        visible={withoutVisible}
        onCancel={() => setWithOutVisible(false)}
        footer={null}
      >
        <p>some information</p>
        <p>some information</p>
        <p>some information</p>
      </Modal>
      <Modal
        title="custom footer"
        visible={customVisible}
        onCancel={() => setCustomVisible(false)}
        footer={
          <div style={{ marginTop: 12, textAlign: 'end' }}>
            <Button type="success" onClick={() => setCustomVisible(false)}>
              我已知晓
            </Button>
          </div>
        }
      >
        <p>this is custom footer modal</p>
      </Modal>
    </>
  );
};

export default App;
