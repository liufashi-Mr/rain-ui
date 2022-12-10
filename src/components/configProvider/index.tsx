import React, { createContext } from 'react';
import type { ConfigProviderProps } from './interface';
import { setThemeConfig, setDarkTheme } from '../../utils/setTheme';
import './style/test.less';
import { useEffect } from 'react';
export const configCtx = createContext<ConfigProviderProps>({} as ConfigProviderProps); // 顶层通信装置

const ConfigProvider = (props: ConfigProviderProps) => {
  const { children, globalTheme, darkTheme, darkBackgroundColor, compact, childrenTheme } = props;
  useEffect(() => {
    setThemeConfig(document.documentElement, globalTheme);
    setDarkTheme(darkBackgroundColor, globalTheme, darkTheme);
  }, [globalTheme, darkBackgroundColor, darkTheme]);

  return <configCtx.Provider value={{ childrenTheme }}>{children}</configCtx.Provider>;
};

export default ConfigProvider;
