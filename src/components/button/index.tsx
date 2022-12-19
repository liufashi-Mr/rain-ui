import React, { useState } from 'react';
import type { ButtonProps } from './interface';
import cls from 'classnames';
import './style/index.less';
// import { LoadingOutlined } from '@ant-design/icons';

const prefixCls = 'rain-btn';
const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    children,
    style,
    type = 'default',
    size = 'default',
    shape = 'default',
    htmlType = 'button',
    icon,
    className,
    ghost,
    ...rest
  },
  ref,
) => {
  const [clickAnimation, setClickAnimation] = useState(false);
  // if (rest.danger) {
  //   type = 'error';
  // }
  const classes = cls(prefixCls, className || '', {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-${shape}`]: shape,
  });
  const buttonAttributes = {
    className: classes,
    style: {
      ...style,
      borderRadius: rest.radius || '',
    },
    type: htmlType || 'button',
    ref,
    ...rest,
    onClick(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) {
      const { onClick } = rest;
      setClickAnimation(true);
      const timer = setTimeout(() => {
        clearTimeout(timer);
        setClickAnimation(false);
      }, 300);
      // if (innerLoading || mergedDisabled) {
      //   e.preventDefault();
      //   return;
      // }
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
    },
  };
  if (type === 'link') {
    return (
      <a className={classes} style={style} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button has-shadow={clickAnimation.toString()} {...buttonAttributes}>
      <span>{children}</span>
    </button>
  );
};

export default React.forwardRef<unknown, ButtonProps>(Button);
