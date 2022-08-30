import React from 'react';
import t from 'prop-types';

export interface AlertProps {
  /**
   * @description       Alert 的类型
   * @default           'info'
   */
  type?: 'info' | 'positive' | 'negative' | 'warning';
  color?: string;
  children?: React.ReactNode;
}

export type typeMap = Record<Required<AlertProps>['type'], string>;

const prefixCls = 'e-alert';

const types: typeMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

const Alert: React.FC<AlertProps> = ({ children, type = 'info', ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: types[type],
    }}
    {...rest}
  >
    {children}
  </div>
);

Alert.propTypes = {
  type: t.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Alert;
