import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  ExclamationCircleFilled,
  CheckCircleFilled,
  CloseCircleFilled,
  LoadingOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import cls from 'classnames';
import { CSSTransition } from 'react-transition-group';
import type { MessageProps, MessageType } from './interface';
import './style/index.less';

const prefixCls = 'rain-message';
const Message = (props: MessageProps) => {
  const {
    type,
    content,
    duration = 3000,
    closeable,
    className,
    icon,
    onClose,
    handleClose,
    ...rest
  } = props;
  const [visible, setVisible] = useState(true);
  const classes = cls(prefixCls, className, {
    [`${prefixCls}-${type}`]: type,
  });

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onClose?.();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const messageIcon = (
    messageType?: MessageType,
    customIcon?: React.ReactNode,
  ): React.ReactNode => {
    if (customIcon) return customIcon;
    switch (messageType) {
      case 'info':
        return <ExclamationCircleFilled />;
      case 'success':
        return <CheckCircleFilled />;
      case 'warning':
        return <ExclamationCircleFilled />;
      case 'error':
        return <CloseCircleFilled />;
      case 'loading':
        return <LoadingOutlined />;
      default:
        return <ExclamationCircleFilled />;
    }
  };
  const handleCloseClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setVisible(false);
    handleClose?.();
  };
  return (
    <CSSTransition
      in={visible}
      timeout={300}
      appear
      mountOnEnter
      classNames={`${prefixCls}-animation`}
      unmountOnExit
    >
      <div {...rest} className={classes}>
        <span className={`${prefixCls}-icon`}>{messageIcon(type, icon)}</span>
        <span>{content}</span>
        {closeable && (
          <span className={`${prefixCls}-close`}>
            <CloseOutlined onClick={handleCloseClick} />
          </span>
        )}
      </div>
    </CSSTransition>
  );
};
let messageContainer: HTMLDivElement | null = null;
const createMessage = (messageConfig: MessageProps) => {
  const { duration = 3000, container = document.body, ...rest } = messageConfig;
  messageContainer = messageContainer ? messageContainer : document.createElement('div');
  messageContainer.className = `${prefixCls}-container`;
  const divElement = document.createElement('div');
  divElement.style.marginBottom = '18px';
  container.appendChild(messageContainer);
  messageContainer.appendChild(divElement);

  const handleClose = () => {
    const timer = setTimeout(() => {
      messageContainer?.removeChild(divElement);
      if (!messageContainer?.childNodes.length) {
        container.removeChild(messageContainer as HTMLDivElement);
      }
      clearTimeout(timer);
    }, duration + 300);
  };
  ReactDOM.render(
    <Message {...rest} handleClose={handleClose} duration={duration} container={container} />,
    divElement,
  );
};

const getMessageType = (type: MessageType, props: MessageProps | string) => {
  createMessage(typeof props === 'string' ? { type, content: props } : { ...props, type });
};

Message.info = (props: MessageProps | string) => getMessageType('info', props);
Message.success = (props: MessageProps | string) => getMessageType('success', props);
Message.warning = (props: MessageProps | string) => getMessageType('warning', props);
Message.error = (props: MessageProps | string) => getMessageType('error', props);
Message.loading = (props: MessageProps | string) => getMessageType('loading', props);

export default Message;
