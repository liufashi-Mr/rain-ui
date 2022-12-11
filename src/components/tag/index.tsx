import React, { useContext } from 'react';
import type { TagProps } from './interface';
import { configCtx } from '../configProvider';
// import cls from 'classnames';
import './style/index.less';

const Tag: React.ForwardRefRenderFunction<HTMLSpanElement, TagProps> = (
  { closable, color, icon, size },
  ref,
) => {
  console.log(closable, color, icon, size);
  const { compact } = useContext(configCtx);
  console.log(compact);
  return <span ref={ref}>1</span>;
};

export default React.forwardRef<unknown, TagProps>(Tag);
