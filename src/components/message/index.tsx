import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  ExclamationCircleFilled,
  CheckCircleFilled,
  CloseCircleFilled,
  LoadingOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import cls from 'classnames';
import { configCtx } from '../configProvider';
import { CSSTransition } from 'react-transition-group';
import type { MessageProps, MessageType } from './interface';
import './style/index.less';

const prefixCls = 'rain-message';
const Message: React.FC<MessageProps> = ({
  type,
  content,
  duration = 3000,
  closeable,
  className,
  icon,
  onClose,
  ...rest
}) => {
  const [visible, setVisible] = useState(true);
  const { compact, dark } = useContext(configCtx);
  console.log(compact, dark);
  const classes = cls(prefixCls, className, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-dark`]: dark,
    [`${prefixCls}-compact`]: compact,
  });

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
    onClose?.(e);
    if (e.defaultPrevented) {
      return;
    }
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
  const containerElement = messageConfig.container || document.body;
  messageContainer = messageContainer ? messageContainer : document.createElement('div');
  messageContainer.className = `${prefixCls}-container`;
  const divElement = document.createElement('div');
  divElement.style.marginBottom = '12px';
  ReactDOM.render(<Message {...messageConfig} />, divElement);
  messageContainer.appendChild(divElement);
  containerElement.appendChild(messageContainer);
};

Message.info = (props: string | MessageProps) => {
  return createMessage({ ...props, type: 'info' });
};
export default Message;
