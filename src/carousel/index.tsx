import React, { useMemo } from 'react';
import { useState, useImperativeHandle } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import cls from 'classnames';
import './style';

interface IProps {
  /**
   * @description     自动播放
   * @default         false
   * @type            boolean
   */
  autoPlay?: boolean;

  /**
   * @description     展示预设指示器
   * @default         false
   * @type            boolean
   */
  dots?: boolean;

  /**
   * @description     展示预设箭头
   * @default         false
   * @type            boolean
   */
  arrows?: boolean;

  /**
   * @description     一屏展示多少项目
   * @default         1
   * @type            number
   */
  slidesToShow?: number;

  /**
   * @description     一次滚动多少个
   * @default         1
   * @type            number
   */
  slidesToScroll?: number;

  /**
   * @description     轮播结束时的回调
   * @default         null
   * @type            function
   */
  afterChange?(current: number): void;

  /**
   * @description     轮播开始前的回调
   * @default         null
   * @type            function
   */
  beforeChange?(from: number, to: number): void;

  /**
   * @description     ref => 用于手动控制前后
   * @default         null
   * @type            any
   */
  ref?: any;
}

const Carousel: React.FC<IProps> = React.forwardRef(
  (
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
        const { children }: { children: HTMLCollection } = el;
        let maxWidth = 0,
          maxHeight = 0;
        Array.from(children).forEach((item) => {
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
          console.log(needMove);
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
      const t = setTimeout(() => {
        if (current === -1) {
          setAniDuration(0);
          //
          setCurrent(currentArray.length - 1);
          //
        } else if (current === currentArray.length) {
          setAniDuration(0);
          setCurrent(0);
        } else {
          afterChange && afterChange(current);
        }
        setAction(true);
      }, aniDuration);
      return () => {
        clearTimeout(t);
      };
    }, [current]);

    // 自动播放
    useEffect(() => {
      let t: any = null;
      if (action && autoPlay) {
        t = setTimeout(() => {
          next();
        }, 3000);
      }
      return () => {
        t && clearTimeout(t);
      };
    }, [action]);

    // 前进
    const next = () => {
      if (!action) return;
      if (!aniDuration) setAniDuration(600);
      beforeChange && beforeChange(current, current === currentArray.length - 1 ? 0 : current + 1);
      setCurrent((n) => n + 1);
    };

    // 后退
    const back = () => {
      if (!action) return;
      if (!aniDuration) setAniDuration(600);
      beforeChange && beforeChange(current, current === 0 ? currentArray.length - 1 : current - 1);
      setCurrent((n) => n - 1);
    };

    // 跳转到指定位置
    const goTo = (n: number) => {
      if (!action) return;
      if (!aniDuration) setAniDuration(600);
      beforeChange && beforeChange(current, n);
      setCurrent(n);
    };

    // 控制箭头显示隐藏
    const handleArrowShow = (show: boolean) => {
      if (!arrows) return;
      setShowArrow(show);
    };

    useImperativeHandle(ref, () => ({
      next,
      back,
      goTo,
    }));

    return (
      <>
        <div
          className={'wrap'}
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
            className={'innerWrapper'}
            style={{
              transform: `translateX(${offset - wrapperWidth}px)`,
              transition: `${aniDuration / 1000}s`,
            }}
          >
            {/* 预留最后一屏 */}
            {renderArray.slice(renderArray.length - slidesToShow).map((item, index) => (
              <div className={'itemWrap'} key={`last_wrap_${index}`}>
                {item}
              </div>
            ))}
            {/* <div className={'itemWrap'}>
              {renderArray[renderArray.length - 1]}
            </div> */}
            {renderArray.map((item, index) => (
              <div className={'itemWrap'} key={`wrap_${index}`}>
                {item}
              </div>
            ))}
            {/* 预留第一屏 */}
            {renderArray.slice(0, slidesToShow).map((item, index) => (
              <div className={'itemWrap'} key={`last_wrap_${index}`}>
                {item}
              </div>
            ))}
            {/* <div className={'itemWrap'}>{renderArray[0]}</div> */}
          </div>
          {/* 点位 */}
          {dots && (
            <div className="dots">
              {currentArray.map((_, index) => (
                <span
                  key={`dot_${index}`}
                  className={cls('dot', {
                    ['active']:
                      current === index ||
                      (current === -1 && index === currentArray.length - 1) ||
                      (current === currentArray.length && index === 0),
                  })}
                  onClick={() => goTo(index)}
                ></span>
              ))}
            </div>
          )}
          {/* 预设箭头 start */}
          {arrows && <div className={cls('arrowLeft', { show: showArrow })} onClick={back}></div>}
          {arrows && <div className={cls('arrowRight', { show: showArrow })} onClick={next}></div>}
          {/* 预设箭头 end */}
        </div>
      </>
    );
  },
);

export default Carousel;
