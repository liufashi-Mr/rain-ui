import React from 'react';
import { Modal, Button, message, Space } from 'raind';
import type { ModalConfigProps } from '../interface';
const App: React.FC = () => {
  const config: ModalConfigProps = {
    title: 'Modal title',
    content: (
      <>
        <p>something content</p>
        <p>something content</p>
        <p>something content</p>
        <p>something content</p>
        <p>something content</p>
      </>
    ),
    cancelText: 'cancel',
    confirmText: 'confirm',
    onCancel() {
      message.info('handle click cancel');
    },
    onConfirm() {
      message.info('handle click confirm');
    },
  };
  const submitInfo = () =>
    new Promise<any>((resolve, reject) => {
      setTimeout(
        () =>
          Math.random() > 0.5
            ? resolve({
                code: 200,
                success: true,
                data: { name: 'liu', url: 'https://blog.liufashi.top' },
              })
            : reject('something error'),
        1500,
      );
    });
  return (
    <Space>
      <Button onClick={() => Modal.open(config)}>open</Button>
      <Button type="primary" onClick={() => Modal.info(config)}>
        info
      </Button>
      <Button type="success" onClick={() => Modal.success(config)}>
        success
      </Button>
      <Button type="warning" onClick={() => Modal.warning(config)}>
        warning
      </Button>
      <Button type="error" onClick={() => Modal.error(config)}>
        error
      </Button>
      <Button
        type="dashed"
        danger
        onClick={() => Modal.open({ ...config, onCancel: submitInfo, onConfirm: submitInfo })}
      >
        with promise
      </Button>
    </Space>
  );
};

export default App;
