import React, { useContext, useState } from 'react';
import type { TagProps } from './interface';
import { configCtx } from '../configProvider';
import cls from 'classnames';
import { CloseOutlined } from '@ant-design/icons';
import './style/index.less';

const prefixCls = 'rain-tag';
const Tag: React.ForwardRefRenderFunction<HTMLSpanElement, TagProps> = (props, ref) => {
  const {
    closable = false,
    color = 'default',
    icon,
    bordered,
    className,
    onClose,
    children,
  } = props;
  const [visible, setVisible] = useState(true);
  const { compact } = useContext(configCtx);
  const isPreset = ['primary', 'warning', 'error', 'success', 'default'].includes(color as string);
  const classes = cls(prefixCls, className || '', {
    [`${prefixCls}-compact`]: compact,
    [`${prefixCls}-${color}`]: isPreset,
    [`${prefixCls}-${color}-bordered`]: bordered && isPreset,
  });

  const tagAttributes = {
    className: classes,
    style: {
      backgroundColor: !isPreset ? color : '',
    },
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
    <>
      {visible && (
        <span ref={ref} {...tagAttributes}>
          {icon}
          <span style={{ marginLeft: icon ? 7 : 0, marginRight: closable ? 7 : 0 }}>
            {children}
          </span>
          {closable && <CloseOutlined style={{ fontSize: 10 }} onClick={handleCloseClick} />}
        </span>
      )}
    </>
  );
};

export default React.forwardRef<unknown, TagProps>(Tag);
