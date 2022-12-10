import React, { useEffect, useRef } from 'react';
import '../style/test.less';
import { useContext } from 'react';
import { configCtx } from '..';
import { setThemeConfig, setDarkTheme } from '../../../utils';
const Comp = () => {
  const ref = useRef<any>();
  const { theme, dark, darkBackgroundColor } = useContext(configCtx);
  useEffect(() => {
    setThemeConfig(ref.current, theme);
    setDarkTheme(ref.current, darkBackgroundColor, theme, dark);
  }, [theme, dark, darkBackgroundColor]);
  return (
    <>
      <div className="container" ref={ref} />
      <div className="container2" ref={ref} />
    </>
  );
};

export default Comp;
