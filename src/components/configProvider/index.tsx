import React, { createContext, useEffect, useRef } from 'react';
import type { ConfigProviderProps } from './interface';
import { setThemeConfig, setDarkTheme } from '../../utils/setTheme';

export const configCtx = createContext<ConfigProviderProps>({} as ConfigProviderProps); // 顶层通信装置

const ConfigProvider: React.FC<ConfigProviderProps> = ({ children, ...rest }) => {
  const configRef = useRef<any>();
  const { theme, dark, darkBackgroundColor } = rest;
  useEffect(() => {
    setThemeConfig(configRef?.current, theme);
    setDarkTheme(configRef?.current, darkBackgroundColor, theme, dark);
  }, [rest]);

  return (
    <configCtx.Provider value={rest}>
      <div ref={configRef}>{children}</div>
    </configCtx.Provider>
  );
};

export default ConfigProvider;
