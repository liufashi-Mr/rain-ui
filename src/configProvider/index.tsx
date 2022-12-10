import React, { createContext } from 'react';
import { ConfigProviderProps } from './interface';
import { setThemeConfig } from '../utils/setTheme';

import './style/test.less';
export const configCtx = createContext<ConfigProviderProps>({} as ConfigProviderProps); // 顶层通信装置

const ConfigProvider = (props: ConfigProviderProps) => {
  const { children, globalTheme, darkBackgroundColor, ...rest } = props;
  if (globalTheme) {
    setThemeConfig(document.documentElement, globalTheme);
  }
  return <configCtx.Provider value={rest}>{children}</configCtx.Provider>;
};

export default ConfigProvider;
