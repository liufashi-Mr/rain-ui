import React, { createContext, useEffect, useRef } from 'react';
import type { ConfigProviderProps } from './interface';
import { setThemeConfig, setDarkTheme, setOtherConfig } from '../../utils/setTheme';
export const configCtx = createContext<ConfigProviderProps>({} as ConfigProviderProps); // 顶层通信装置

const ConfigProvider: React.FC<ConfigProviderProps> = ({ children, ...rest }) => {
  const configRef = useRef<HTMLDivElement>(null);
  const { theme, dark, darkBackgroundColor, config, local } = rest;
  useEffect(() => {
    if (configRef.current) {
      const element = local ? configRef?.current : document.documentElement;
      setThemeConfig(element, theme);
      setOtherConfig(element, dark, config);
      setDarkTheme(element, darkBackgroundColor, theme, dark);
    }
  }, [rest]);

  return (
    <configCtx.Provider value={rest}>
      <div ref={configRef}>{children}</div>
    </configCtx.Provider>
  );
};

export default ConfigProvider;
