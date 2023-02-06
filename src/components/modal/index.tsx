import React, { useContext, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { getBarWidth, hasScrollbar } from '../../utils/scrollBar';
import { configCtx } from '../configProvider';
import { Button, message, Space } from '../../index';
import {
  ExclamationCircleFilled,
  CheckCircleFilled,
  CloseCircleFilled,
  CloseOutlined,
} from '@ant-design/icons';
import cls from 'classnames';
import type { ModalProps, ModalTypes, ModalConfigProps } from './interface';
import './style/index.less';

const prefixCls = 'rain-modal';
const Modal = (props: ModalProps) => {
  const {
    visible,
    width = 520,
    title,
    type,
    icon,
    mask = true,
    maskClosable = true,
    footer,
    confirmLoading = false,
    closeIcon = <CloseOutlined />,
    onConfirm,
    onCancel,
    className,
    confirmText = '确 认',
    cancelText = '取 消',
    confirmButtonProps,
    cancelButtonProps,
    children,
    useFunction,
    ...rest
  } = props;
  const { compact } = useContext(configCtx);
  const [open, setOpen] = useState(useFunction ? true : false);
  const [cancelAsyncLoading, setCancelAsyncLoading] = useState(false);
  const [confirmAsyncLoading, setConfirmAsyncLoading] = useState(false);

  useEffect(() => {
    if (hasScrollbar()) {
      if (visible || open) {
        document.body.style.overflowY = 'hidden';
        document.body.style.width = `calc( 100% - ${getBarWidth()}px )`;
      } else {
        const timer = setTimeout(() => {
          document.body.style.width = '';
          document.body.style.overflowY = '';
          clearTimeout(timer);
        }, 300);
      }
    }
  }, [visible, open]);

  const modalAttributes = useMemo(
    () => ({
      className: cls(prefixCls, className, {
        [`${prefixCls}-compact`]: compact,
      }),
      style: {
        ...rest.style,
        left: `calc( 50% - ${+(width + 'px').replace(/px/g, '') / 2}px )`,
        width,
      },
    }),
    [className, rest.style, width, compact],
  );

  const titleIcon = (modalType?: ModalTypes): React.ReactNode => {
    switch (modalType) {
      case 'info':
        return (
          <ExclamationCircleFilled className={cls(`${prefixCls}-icon`, `${prefixCls}-info`)} />
        );
      case 'success':
        return <CheckCircleFilled className={cls(`${prefixCls}-icon`, `${prefixCls}-success`)} />;
      case 'warning':
        return (
          <ExclamationCircleFilled className={cls(`${prefixCls}-icon`, `${prefixCls}-warning`)} />
        );
      case 'error':
        return <CloseCircleFilled className={cls(`${prefixCls}-icon`, `${prefixCls}-error`)} />;
      default:
        return null;
    }
  };
  const compositionConfirm = () => {
    const thenFunc = onConfirm?.();
    if (thenFunc?.then) {
      setConfirmAsyncLoading(true);
      thenFunc
        .then(() => (useFunction ? setOpen(false) : onCancel?.()))
        .catch((err: string) => message.error(err))
        .finally(() => setConfirmAsyncLoading(false));
    } else if (useFunction) setOpen(false);
  };
  const compositionCancel = () => {
    const thenFunc = onCancel?.();
    if (useFunction && thenFunc?.then) {
      setCancelAsyncLoading(true);
      thenFunc
        .then(() => setOpen(false))
        .catch((err: string) => message.error(err))
        .finally(() => setCancelAsyncLoading(false));
    } else if (useFunction) setOpen(false);
  };
  return createPortal(
    <>
      <CSSTransition
        in={useFunction ? open : visible}
        timeout={300}
        appear
        mountOnEnter
        classNames={`${prefixCls}-mask-animation`}
        unmountOnExit
      >
        <div
          style={{ backgroundColor: mask ? 'rgba(0, 0, 0, 0.45)' : 'transparent' }}
          className={`${prefixCls}-mask`}
          onClick={() => (useFunction && maskClosable ? setOpen(false) : onCancel?.())}
        />
      </CSSTransition>
      <CSSTransition
        in={useFunction ? open : visible}
        timeout={300}
        appear
        mountOnEnter
        classNames={`${prefixCls}-animation`}
        unmountOnExit
      >
        <div {...modalAttributes}>
          {closeIcon && (
            <span
              className={`${prefixCls}-closed`}
              onClick={() => (useFunction ? setOpen(false) : onCancel?.())}
            >
              {closeIcon}
            </span>
          )}
          <div className={`${prefixCls}-header`}>
            <>
              {icon ? icon : titleIcon(type)}
              {title}
            </>
          </div>
          <div className={`${prefixCls}-body`}>{children}</div>
          {footer !== undefined ? (
            footer
          ) : (
            <div className={`${prefixCls}-footer`}>
              <Space style={{ flexDirection: 'row-reverse' }}>
                <Button
                  disabled={cancelAsyncLoading && useFunction}
                  onClick={compositionConfirm}
                  type="primary"
                  {...confirmButtonProps}
                  loading={confirmLoading || confirmAsyncLoading}
                >
                  {confirmText}
                </Button>
                <Button
                  disabled={confirmAsyncLoading && useFunction}
                  onClick={compositionCancel}
                  {...cancelButtonProps}
                  loading={cancelAsyncLoading}
                >
                  {cancelText}
                </Button>
              </Space>
            </div>
          )}
        </div>
      </CSSTransition>
    </>,
    document.body,
  );
};

const createModal = (config: ModalConfigProps) => {
  if (config.footer || config.footer === null) {
    throw new Error('Can not use a custom footer for a functional call');
  }
  const { content, ...rest } = config;
  const divElement = document.createElement('div');
  document.body.appendChild(divElement);
  ReactDOM.render(
    <Modal {...rest} useFunction>
      {content}
    </Modal>,
    divElement,
  );
};
Modal.open = (config: ModalConfigProps) => {
  createModal(config);
};
Modal.info = (config: ModalConfigProps) => {
  createModal({ ...config, type: 'info' });
};
Modal.success = (config: ModalConfigProps) => {
  createModal({
    ...config,
    type: 'success',
    confirmButtonProps: { type: 'success', ...(config.confirmButtonProps || {}) },
  });
};
Modal.warning = (config: ModalConfigProps) => {
  createModal({
    ...config,
    type: 'warning',
    confirmButtonProps: { type: 'warning', ...(config.confirmButtonProps || {}) },
  });
};
Modal.error = (config: ModalConfigProps) => {
  createModal({
    ...config,
    type: 'error',
    confirmButtonProps: { type: 'error', ...(config.confirmButtonProps || {}) },
  });
};

export default Modal;
