import React, { FC } from 'react';
import cls from 'classnames';
export interface EllipsisProps {
  /**
   * @description       文本显示的行数
   * @type              number
   * @default           1
   */
  columns?: number;
  /**
   * @description       文本截断方式
   * @type              属性word-break的值
   * @default           'break-word'
   */
  _break?: string | any;
  className?: string;
  style?: React.CSSProperties;
}
const prefixCls = 'e-ellipsis';
const Ellipsis: FC<EllipsisProps> = ({
  children,
  columns = 1,
  _break = 'break-word',
  style,
  className,
  ...rest
}) => {
  const classes = cls(prefixCls, className, {
    [`${prefixCls}-columns`]: columns,
  });
  const styles = {
    WebkitLineClamp: columns,
    wordBreak: _break,
  };
  return (
    <div className={classes} style={{ ...style, ...styles }} {...rest}>
      {children}
    </div>
  );
};

export default Ellipsis;
