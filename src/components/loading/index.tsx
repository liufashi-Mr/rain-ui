import React, { useContext } from 'react';
import type { LoadingProps } from './interface';
import cls from 'classnames';
import './style/index.less';
import { configCtx } from '../configProvider';
import Blossom from './Blossom';
import Spin from './Spin';
import Collide from './Collide';
const prefixCls = 'rain-loading';
const LoadingType: React.FC<Pick<LoadingProps, 'type' | 'size' | 'indicator'>> = ({
  type,
  size,
  indicator,
}) => {
  const { compact } = useContext(configCtx);
  const classes = cls(`${prefixCls}-${type}`, `${prefixCls}-${type}-${size}`, {
    [`${prefixCls}-${type}-compact`]: compact,
  });
  if (indicator) return indicator as React.ReactElement;
  switch (type) {
    case 'blossom':
      return <Blossom classNames={classes} />;
    case 'spin':
      return <Spin classNames={classes} />;
    case 'collide':
      return <Collide classNames={classes} />;
    default:
      return <Spin classNames={classes} />;
  }
};

const Loading: React.FC<LoadingProps> = ({
  type = 'spin',
  size = 'middle',
  tip,
  children,
  loading = true,
  indicator,
  ...rest
}) => {
  const LoadingItem = () => {
    return (
      <div style={{ display: 'inline-block' }}>
        <div className={cls(prefixCls, `${prefixCls}-${size}`)} {...rest}>
          <LoadingType type={type} size={size} indicator={indicator} />
        </div>
        {tip && <div className={`${prefixCls}-tip`}>{tip}</div>}
      </div>
    );
  };
  if (children) {
    return (
      <div className={`${prefixCls}-container`} data-loading={loading.toString()}>
        <div className={`${prefixCls}-container-item`}>{loading ? <LoadingItem /> : null}</div>
        {children}
      </div>
    );
  }
  return loading ? <LoadingItem /> : null;
};

export default Loading;

export type { LoadingProps };
