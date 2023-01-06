import React, { useMemo, useRef, useState, useImperativeHandle, useEffect } from 'react';

import cls from 'classnames';
import './style/index.less';

import type { CarouselProps } from './interface';

type CarouselHandle = {
  next: () => void;
  previous: () => void;
  goTo: (index: number) => void;
};

const prefixCls = 'rain-carousel';
const Carousel: React.ForwardRefRenderFunction<CarouselHandle, CarouselProps> = (
  {
    children,
    beforeChange,
    afterChange,
    autoPlay,
    dots,
    arrows,
    slidesToShow = 1,
    slidesToScroll = 1,
  },
  ref,
) => {
  const itemRef = useRef(null);
  const [init, setInit] = useState(true);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [renderArray, setRenderArray] = useState([] as any[]);
  const [current, setCurrent] = useState(0);
  const [offset, setOffset] = useState(0);
  const [aniDuration, setAniDuration] = useState(0);
  const [action, setAction] = useState(true);
  // 是否展示箭头
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    setInit(false);
  }, []);

  const currentArray = useMemo(
    () =>
      renderArray.length > 0
        ? new Array(Math.ceil((renderArray.length - slidesToShow) / slidesToScroll) + 1).fill(0)
        : [],
    [renderArray],
  );

  useEffect(() => {
    const initialArray: any[] = Array.isArray(children)
      ? children
      : typeof children === 'object'
      ? [children]
      : [];
    setRenderArray(initialArray);
  }, [children]);

  // 计算容器宽高
  useEffect(() => {
    const { current: el } = itemRef;
    if (el) {
      //@ts-ignore
      const { children: elChildren }: { children: HTMLCollection } = el;
      let maxWidth = 0,
        maxHeight = 0;
      Array.from(elChildren).forEach((item) => {
        if (item.clientWidth > maxWidth) maxWidth = item.clientWidth;
        if (item.clientHeight > maxHeight) maxHeight = item.clientHeight;
      });
      setWrapperWidth(maxWidth * slidesToShow);
      setWrapperHeight(maxHeight);
    }
  }, [renderArray]);

  // current变更
  useEffect(() => {
    if (init) return;
    const itemMove = -wrapperWidth / slidesToShow;
    setAction(false);
    let needMove = slidesToScroll;
    if (current * slidesToScroll + slidesToShow > renderArray.length) {
      // 下一帧超出边界
      if ((current - 1) * slidesToScroll + slidesToShow >= renderArray.length) {
        // 当前帧已到底，下一帧走预留
        needMove = renderArray.length - (current - 1) * slidesToScroll;
      } else if ((current - 1) * slidesToScroll + slidesToShow < renderArray.length) {
        // 当前帧还未到底，下一帧移到底部
        needMove = renderArray.length - ((current - 1) * slidesToScroll + slidesToShow);
      }
      setOffset(itemMove * slidesToScroll * (current - 1) + itemMove * needMove);
    } else if (current === -1) {
      // 下一帧到达头部预留，步进展示数目
      needMove = slidesToShow;
      setOffset(itemMove * needMove * current);
    } else {
      setOffset(itemMove * slidesToScroll * current);
    }

    // 边界处理 && 回调
    const timer = setTimeout(() => {
      if (current === -1) {
        setAniDuration(0);
        setCurrent(currentArray.length - 1);
      } else if (current === currentArray.length) {
        setAniDuration(0);
        setCurrent(0);
      } else {
        afterChange?.(current);
      }
      setAction(true);
    }, aniDuration);
    return () => {
      clearTimeout(timer);
    };
  }, [current]);

  // 前进
  const next = () => {
    if (!action) return;
    if (!aniDuration) setAniDuration(600);
    beforeChange?.(current, current === currentArray.length - 1 ? 0 : current + 1);
    setCurrent((n) => n + 1);
  };

  // 后退
  const previous = () => {
    if (!action) return;
    if (!aniDuration) setAniDuration(600);
    beforeChange?.(current, current === 0 ? currentArray.length - 1 : current - 1);
    setCurrent((n) => n - 1);
  };

  // 跳转到指定位置
  const goTo = (n: number) => {
    if (!action) return;
    if (!aniDuration) setAniDuration(600);
    beforeChange?.(current, n);
    setCurrent(n);
  };

  // 控制箭头显示隐藏
  const handleArrowShow = (show: boolean) => {
    if (!arrows) return;
    setShowArrow(show);
  };

  useImperativeHandle(ref, () => ({
    next,
    previous,
    goTo,
  }));

  // 自动播放
  useEffect(() => {
    let timer: any = null;
    if (action && autoPlay) {
      timer = setTimeout(() => {
        next();
      }, 3000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [action]);
  return (
    <>
      <div
        className={`${prefixCls}-wrap`}
        style={{ width: wrapperWidth + 'px', height: wrapperHeight + 'px' }}
        onMouseEnter={() => {
          handleArrowShow(true);
        }}
        onMouseLeave={() => {
          handleArrowShow(false);
        }}
      >
        <div
          ref={itemRef}
          className={`${prefixCls}-inner-wrapper`}
          style={{
            transform: `translateX(${offset - wrapperWidth}px)`,
            transition: `${aniDuration / 1000}s`,
          }}
        >
          {/* 预留最后一屏 */}
          {renderArray.slice(renderArray.length - slidesToShow).map((item, index) => (
            <div className={`${prefixCls}-item-wrap`} key={`last_wrap_${index}`}>
              {item}
            </div>
          ))}
          {renderArray.map((item, index) => (
            <div className={`${prefixCls}-item-wrap`} key={`wrap_${index}`}>
              {item}
            </div>
          ))}
          {/* 预留第一屏 */}
          {renderArray.slice(0, slidesToShow).map((item, index) => (
            <div className={`${prefixCls}-item-wrap`} key={`last_wrap_${index}`}>
              {item}
            </div>
          ))}
        </div>
        {/* 点位 */}
        {dots && (
          <div className={`${prefixCls}-dots`}>
            {currentArray.map((_, index) => (
              <span
                key={`dot_${index}`}
                className={cls(`${prefixCls}-dot`, {
                  [`${prefixCls}-active`]:
                    current === index ||
                    (current === -1 && index === currentArray.length - 1) ||
                    (current === currentArray.length && index === 0),
                })}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        )}
        {/* 预设箭头 start */}
        {arrows && (
          <div
            className={cls(`${prefixCls}-arrow-left`, {
              [`${prefixCls}-arrow-left-show`]: showArrow,
            })}
            onClick={previous}
          />
        )}
        {arrows && (
          <div
            className={cls(`${prefixCls}-arrow-right`, {
              [`${prefixCls}-arrow-right-show`]: showArrow,
            })}
            onClick={next}
          />
        )}
        {/* 预设箭头 end */}
      </div>
    </>
  );
};

export default React.forwardRef<CarouselHandle, CarouselProps>(Carousel);
