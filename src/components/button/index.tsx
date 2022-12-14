import React from 'react';
import { ButtonProps } from './interface';
import cls from 'classnames';
import './style/index.less';
const prefixCls = 'rain-btn';
const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, style, type = 'default', size = 'default', shape, htmlType, className, ...rest },
  ref,
) => {
  const classes = cls(prefixCls, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-${shape}`]: shape,
  });

  if ('radius' in rest) {
    style = { ...style, borderRadius: rest.radius + 'px' } as React.CSSProperties;
  }
  if ('href' in rest) {
    return (
      <a className={classes} style={style} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button ref={ref} className={classes} style={style} type={htmlType || 'button'} {...rest}>
      <span>{children}</span>
    </button>
  );
};

export default React.forwardRef<unknown, ButtonProps>(Button);
