import React, { createContext, useEffect, useRef } from 'react';
import type { ConfigProviderProps } from './interface';
import { setThemeConfig, setDarkTheme, setOtherConfig } from '../../utils/setTheme';

export const configCtx = createContext<ConfigProviderProps>({} as ConfigProviderProps); // 顶层通信装置

const ConfigProvider: React.FC<ConfigProviderProps> = ({ children, ...rest }) => {
  const configRef = useRef<HTMLDivElement>(null);
  const { theme, dark, darkBackgroundColor, config } = rest;
  useEffect(() => {
    if (configRef.current) {
      setThemeConfig(configRef?.current, theme);
      setOtherConfig(configRef?.current, config);
      setDarkTheme(configRef?.current, darkBackgroundColor, theme, dark);
    }
  }, [rest]);

  return (
    <configCtx.Provider value={rest}>
      <div ref={configRef}>{children}</div>
    </configCtx.Provider>
  );
};

export default ConfigProvider;
