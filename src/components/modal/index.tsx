import React, { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { getBarWidth, hasScrollbar } from '../../utils/scrollBar';
import { configCtx } from '../configProvider';
import { Button, Space } from 'raind';
import cls from 'classnames';
import type { ModalProps } from './interface';
import { CloseOutlined } from '@ant-design/icons';
import './style/index.less';

const prefixCls = 'rain-modal';
const Modal = (props: ModalProps) => {
  const { compact } = useContext(configCtx);
  const {
    visible,
    width = 520,
    title,
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
    ...rest
  } = props;

  useEffect(() => {
    if (hasScrollbar()) {
      if (visible) {
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
  }, [visible]);
  const modalAttributes = {
    className: cls(prefixCls, className, {
      [`${prefixCls}-compact`]: compact,
    }),
    style: {
      ...rest.style,
      left: `calc( 50% - ${+(width + 'px').replace(/px/g, '') / 2}px )`,
      width,
    },
  };
  return createPortal(
    <div>
      <CSSTransition
        in={visible}
        timeout={300}
        appear
        mountOnEnter
        classNames={`${prefixCls}-mask-animation`}
        unmountOnExit
      >
        <div
          style={{ backgroundColor: mask ? 'rgba(0, 0, 0, 0.45)' : 'transparent' }}
          className={`${prefixCls}-mask`}
          onClick={() => maskClosable && onCancel?.()}
        />
      </CSSTransition>
      <CSSTransition
        in={visible}
        timeout={300}
        appear
        mountOnEnter
        classNames={`${prefixCls}-animation`}
        unmountOnExit
      >
        <div {...modalAttributes}>
          {closeIcon && (
            <span className={`${prefixCls}-closed`} onClick={() => onCancel?.()}>
              {closeIcon}
            </span>
          )}
          <div className={`${prefixCls}-header`}>{title}</div>
          <div className={`${prefixCls}-body`}>{children}</div>
          {footer !== undefined ? (
            footer
          ) : (
            <div className={`${prefixCls}-footer`}>
              <Space style={{ flexDirection: 'row-reverse' }}>
                <Button
                  onClick={() => onConfirm?.()}
                  type="primary"
                  {...confirmButtonProps}
                  loading={confirmLoading}
                >
                  {confirmText}
                </Button>
                <Button onClick={() => onCancel?.()} {...cancelButtonProps}>
                  {cancelText}
                </Button>
              </Space>
            </div>
          )}
        </div>
      </CSSTransition>
    </div>,
    document.body,
  );
};

export default Modal;
