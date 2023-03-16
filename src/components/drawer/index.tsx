import React, { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import type { DrawerProps } from './interface';
import { configCtx } from '../configProvider';
import cls from 'classnames';
import { CloseOutlined } from '@ant-design/icons';
import './style/index.less';
import { getBarWidth, hasScrollbar } from '../../utils/scrollBar';
import { Button, Space } from '../../index';

const prefixCls = 'rain-drawer';
const Drawer = (props: DrawerProps) => {
  const {
    closable = true,
    onClose,
    style,
    visible = false,
    width = 378,
    title,
    placement = 'right',
    afterOpenChange,
    bodyStyle,
    className,
    closeIcon = <CloseOutlined />,
    children,
    drawerStyle,
    cancelText = '取 消',
    cancelButtonProps,
    onCancel,
    okText = '确 认',
    okButtonProps,
    onOk,
    footer,
    footerStyle,
    mask = true,
    extra,
    maskStyle,
    maskClosable = true,
    height = 378,
    zIndex = 9999,
    getContainer,
  } = props;
  const isTransverse = placement === 'left' || placement === 'right';
  const { compact } = useContext(configCtx);
  const classes = cls(prefixCls, className || '', {
    [`${prefixCls}-compact`]: compact,
  });
  useEffect(() => {
    if (hasScrollbar(getContainer)) {
      console.log(document.getElementsByClassName(`${prefixCls}-content-wrapper`));
      if (
        visible ||
        document.getElementsByClassName(`${prefixCls}-content-wrapper`)?.length - 1 > 0
      ) {
        if (getContainer) {
          getContainer.style.overflowY = 'hidden';
          getContainer.style.width = `calc( 100% - ${getBarWidth()}px )`;
        } else {
          document.body.style.overflowY = 'hidden';
          document.body.style.width = `calc( 100% - ${getBarWidth()}px )`;
        }
      } else {
        const timer = setTimeout(() => {
          if (getContainer) {
            getContainer.style.overflowY = '';
            getContainer.style.width = ``;
          } else {
            document.body.style.width = '';
            document.body.style.overflowY = '';
          }
          clearTimeout(timer);
        }, 300);
      }
    }
    afterOpenChange?.(visible);
  }, [visible]);

  const handleOk = () => {
    onOk?.();
    onClose?.();
  };
  const handleCancel = () => {
    onCancel?.();
    onClose?.();
  };
  return createPortal(
    <div
      className={classes}
      tabIndex={-1}
      style={{ zIndex, position: getContainer ? 'absolute' : undefined }}
    >
      {mask && (
        <CSSTransition
          appear
          unmountOnExit
          mountOnEnter
          in={visible}
          timeout={300}
          classNames={`${prefixCls}-mask-animation`}
        >
          <div
            className={`${prefixCls}-mask`}
            style={maskStyle}
            onClick={() => maskClosable && onClose?.()}
          />
        </CSSTransition>
      )}
      <CSSTransition
        appear
        unmountOnExit
        mountOnEnter
        in={visible}
        timeout={500}
        classNames={`${prefixCls}-animation-${placement}`}
      >
        <div
          className={cls(
            `${prefixCls}-content-wrapper`,
            `${prefixCls}-content-wrapper-${placement}`,
          )}
          style={{
            maxWidth: isTransverse ? width : '100%',
            width: isTransverse ? undefined : '100%',
            maxHeight: isTransverse ? '100%' : height,
            height: isTransverse ? '100%' : undefined,
            ...style,
          }}
        >
          <div
            className={cls(`${prefixCls}-content`, className)}
            style={{
              ...drawerStyle,
              width: isTransverse ? width : undefined,
              height: isTransverse ? undefined : height,
            }}
          >
            <div className={`${prefixCls}-wrapper-body`}>
              {title !== null && (
                <div className={`${prefixCls}-header`}>
                  <div className={`${prefixCls}-header-title`}>
                    {closable && (
                      <div className={`${prefixCls}-close`} onClick={() => onClose?.()}>
                        {closeIcon}
                      </div>
                    )}
                    {title}
                  </div>
                  {extra}
                </div>
              )}
              <div className={`${prefixCls}-body`} style={bodyStyle}>
                {children}
              </div>
              {footer !== null && (
                <div className={`${prefixCls}-footer`} style={footerStyle}>
                  {footer ? (
                    footer
                  ) : (
                    <Space style={{ flexDirection: 'row-reverse' }}>
                      <Button {...okButtonProps} onClick={() => handleOk()} type="primary">
                        {okText}
                      </Button>
                      <Button {...cancelButtonProps} onClick={() => handleCancel()}>
                        {cancelText}
                      </Button>
                    </Space>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>,
    getContainer ? getContainer : document.body,
  );
};

export default Drawer;
