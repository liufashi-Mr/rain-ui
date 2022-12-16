import React, { useContext } from 'react';
import type { DividerProps } from './interface';
import { configCtx } from '../configProvider';
import cls from 'classnames';
import './style/index.less';

const prefixCls = 'rain-divider';

const Divider: React.FC<DividerProps> = (props) => {
  const {
    className,
    children,
    dashed,
    orientation = 'center',
    orientationMargin,
    plain,
    type = 'horizontal',
    ...restProps
  } = props;
  const { compact } = useContext(configCtx);
  const hasChildren = !!children;
  const hasCustomMarginLeft = orientation === 'left' && orientationMargin != null;
  const hasCustomMarginRight = orientation === 'right' && orientationMargin != null;
  const classes = cls(
    prefixCls,
    `${prefixCls}-${type}`,
    {
      [`${prefixCls}-compact`]: compact,
      [`${prefixCls}-with-text`]: hasChildren,
      [`${prefixCls}-with-text-${orientation}`]: hasChildren,
      [`${prefixCls}-dashed`]: !!dashed,
      [`${prefixCls}-plain`]: !!plain,
      [`${prefixCls}-no-default-orientation-margin-left`]: hasCustomMarginLeft,
      [`${prefixCls}-no-default-orientation-margin-right`]: hasCustomMarginRight,
    },
    className,
  );
  const innerStyle = {
    ...(hasCustomMarginLeft && { marginLeft: orientationMargin }),
    ...(hasCustomMarginRight && { marginRight: orientationMargin }),
  };
  return (
    <div className={classes} {...restProps}>
      {children && type !== 'vertical' && (
        <span className={`${prefixCls}-inner-text`} style={innerStyle}>
          {children}
        </span>
      )}
    </div>
  );
};

export default Divider;
