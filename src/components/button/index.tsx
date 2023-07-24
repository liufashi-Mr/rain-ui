import React, { useState, useContext, useMemo } from 'react';
import type { ButtonProps } from './interface';
import cls from 'classnames';
import { configCtx } from '../configProvider';
import './style/index.less';
import { LoadingOutlined } from '@ant-design/icons';

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
    loading,
    danger,
    block,
    ...rest
  },
  ref,
) => {
  const [clickAnimation, setClickAnimation] = useState(false);
  const { compact } = useContext(configCtx);
  let mergeIcon = icon;
  if (loading) {
    mergeIcon = <LoadingOutlined />;
  }
  const classes = useMemo(
    () =>
      cls(prefixCls, className || '', {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-${shape}`]: shape,
        [`${prefixCls}-ghost`]: ghost,
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-danger`]: danger,
        [`${prefixCls}-compact`]: compact,
        [`${prefixCls}-block`]: block,
      }),
    [block, className, compact, danger, ghost, loading, shape, size, type],
  );
  const buttonAttributes = useMemo(
    () => ({
      className: classes,
      style: {
        ...style,
        borderRadius: rest.radius + 'px' || '',
      },
      type: htmlType || 'button',
      ref,
      ...rest,
      onClick(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) {
        if (loading) {
          e.preventDefault();
          return;
        }
        const { onClick } = rest;
        setClickAnimation(true);
        const timer = setTimeout(() => {
          clearTimeout(timer);
          setClickAnimation(false);
        }, 200);

        (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
      },
    }),
    [classes, htmlType, loading, ref, rest, style],
  );

  if (type === 'link') {
    return (
      <a className={classes} style={style} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button data-has-shadow={clickAnimation.toString()} {...buttonAttributes}>
      {mergeIcon && shape !== 'circle' && <span style={{ marginRight: 4 }}>{mergeIcon}</span>}
      {shape === 'circle' && loading ? <LoadingOutlined /> : <span>{children}</span>}
    </button>
  );
};

export default React.forwardRef<unknown, ButtonProps>(Button);

export type { ButtonProps };
