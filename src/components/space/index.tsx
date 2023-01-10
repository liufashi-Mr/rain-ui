import React, { useContext } from 'react';
import type { SpaceProps } from './interface';
import { configCtx } from '../configProvider';
import cls from 'classnames';
import './style/index.less';

const prefixCls = 'rain-space';

const Space: React.FC<SpaceProps> = ({
  children,
  className,
  wrap = true,
  size = 'small',
  direction = 'horizontal',
  align = 'center',
  style,
  spaceItemStyle,
  ...rest
}) => {
  const { compact } = useContext(configCtx);
  const isPresetSize = typeof size === 'string';
  const mapChildren = () => {
    if (Array.isArray(children)) {
      return children.map((item) => {
        return <div style={spaceItemStyle}>{item}</div>;
      });
    }
    return children;
  };

  const spaceAttributes = {
    ...rest,
    className: cls(prefixCls, className, {
      [`${prefixCls}-${size}`]: isPresetSize && size,
      [`${prefixCls}-${align}`]: align,
      [`${prefixCls}-wrap`]: wrap,
      [`${prefixCls}-${direction}`]: direction,
      [`${prefixCls}-${size}-compact`]: isPresetSize && compact && size,
    }),
    style: {
      ...style,
      gap: (!isPresetSize && size.join(' ')) || undefined,
    },
  };

  return <div {...spaceAttributes}>{mapChildren()}</div>;
};

export default Space;
