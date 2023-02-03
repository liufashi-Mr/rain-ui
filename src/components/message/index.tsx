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
import './style/index.less';
import type { MessageProps, MessageType } from './interface';

const prefixCls = 'rain-message';
const Message = (props: MessageProps) => {
  const {
    type,
    content,
    duration,
    loadingClose,
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
  loadingClose?.(setVisible);
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    } else {
      handleClose?.(); // 在visible为false的时候，动画执行完 销毁
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
  const { container = document.body, ...rest } = messageConfig;
  let { duration } = rest;
  duration = rest.type === 'loading' && !duration ? 10000 : 3000;
  messageContainer = messageContainer ? messageContainer : document.createElement('div');
  messageContainer.className = `${prefixCls}-container`;
  const divElement = document.createElement('div');
  divElement.style.marginBottom = '18px';
  container.appendChild(messageContainer);
  messageContainer.appendChild(divElement);

  // 销毁dom
  const handleClose = () => {
    const timer = setTimeout(() => {
      messageContainer?.removeChild(divElement);
      if (!messageContainer?.childNodes.length) {
        container.removeChild(messageContainer as HTMLDivElement);
      }
      clearTimeout(timer);
    }, 300);
  };
  let hide: any = null;
  const loadingClose = (setVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
    hide = () => setVisible(false);
  };

  ReactDOM.render(
    <Message
      {...rest}
      handleClose={handleClose}
      loadingClose={loadingClose}
      duration={duration}
      container={container}
    />,
    divElement,
  );
  return hide;
};

const getMessageType = (type: MessageType, props: MessageProps | string | any) => {
  return createMessage(
    typeof props === 'string' || props.$$typeof ? { type, content: props } : { ...props, type },
  );
};

Message.info = (props: MessageProps | string) => getMessageType('info', props);
Message.success = (props: MessageProps | string) => getMessageType('success', props);
Message.warning = (props: MessageProps | string) => getMessageType('warning', props);
Message.error = (props: MessageProps | string) => getMessageType('error', props);
Message.loading = (props: MessageProps | string) => getMessageType('loading', props);

export default Message;
