import React, { useState, useRef, useEffect } from 'react';
import './style/preview.less';
import { createPortal } from 'react-dom';
import { getBarWidth, hasScrollbar } from '../../utils/scrollBar';
import cls from 'classnames';
import { CSSTransition } from 'react-transition-group';
import {
  CloseOutlined,
  ZoomInOutlined,
  RotateRightOutlined,
  RotateLeftOutlined,
  LeftOutlined,
  RightOutlined,
  ZoomOutOutlined,
  RedoOutlined,
} from '@ant-design/icons';

export interface ImagePreviewProps {
  visible?: boolean;
  onClose?: () => void;
  picList: any[];
  startIndex?: number;
}
const prefixCls = 'rain-image-preview';
const ImagePreview = (props: ImagePreviewProps): React.ReactPortal => {
  const { visible, onClose, picList = [], startIndex = 0 } = props;
  const [picIndex, setPicIndex] = useState(startIndex);
  const [deg, setDeg] = useState(0);
  const [size, setSize] = useState(0);
  const picture: any = useRef();
  const initImagePreView = () => {
    setSize(1);
    setDeg(0);
    if (picture.current) {
      picture.current.style.left = '50%';
      picture.current.style.top = '50%';
    }
  };
  useEffect(() => {
    initImagePreView();
    setPicIndex(0);
    // document.body.style.overflow = visible ? 'hidden' : '';
    if (hasScrollbar()) {
      if (visible) {
        // document.body.style.width = `calc( 100% - ${getBarWidth()}px )`;
        // document.body.style.overflowY = 'hidden';
        document.documentElement.style.width = `calc( 100% - ${getBarWidth()}px )`;
        document.documentElement.style.paddingRight = `${getBarWidth()}px`;
        document.documentElement.style.overflowY = 'hidden';
      } else {
        const timer = setTimeout(() => {
          // document.body.style.width = '100%';
          // document.body.style.overflowY = 'auto';
          document.documentElement.style.width = '100%';
          document.documentElement.style.overflowY = 'auto';
          document.documentElement.style.paddingRight = '0px';

          clearTimeout(timer);
        }, 300);
      }
    }
  }, [visible]);

  useEffect(() => {
    initImagePreView();
  }, [picIndex]);

  useEffect(() => {
    if (picture.current) {
      picture.current.style.transform = `translate(-50%,-50%) scale(${size}) rotate(${deg}deg) `;
    }
  }, [size, deg]);

  const rotate = (flag: boolean) => (flag ? setDeg(deg + 90) : setDeg(deg - 90));

  const setPicSize = (flag: boolean) =>
    size > 1
      ? flag
        ? setSize(size + 0.5)
        : setSize(size - 0.5)
      : flag
      ? setSize(size + 0.5)
      : null;

  const handleChangeSize = (e: React.WheelEvent) =>
    size > 1
      ? e.deltaY > 0
        ? setSize(size - 0.5)
        : setSize(size + 0.5)
      : e.deltaY > 0
      ? null
      : setSize(size + 0.5);

  const handleMove = (event: React.MouseEvent) => {
    const initPageX = event.pageX;
    const initPageY = event.pageY;
    const initLeft = picture.current.offsetLeft;
    const initTop = picture.current.offsetTop;
    window.onmousemove = (e) => {
      const distanceX = e.pageX - initPageX;
      const distanceY = e.pageY - initPageY;
      picture.current.style.left = initLeft + distanceX + 'px';
      picture.current.style.top = initTop + distanceY + 'px';
      window.onmouseup = () => {
        window.onmousemove = null;
      };
    };
  };

  return createPortal(
    <CSSTransition
      in={visible}
      timeout={300}
      appear
      mountOnEnter
      classNames={`${prefixCls}-animation`}
      unmountOnExit
    >
      <div className={prefixCls} onWheel={(e) => handleChangeSize(e)}>
        <header className={`${prefixCls}-header`}>
          <div />
          <div>{`${picIndex + 1}/${picList.length}`}</div>
          <div className={`${prefixCls}-header-close`} onClick={onClose}>
            <CloseOutlined />
          </div>
        </header>
        <div
          className={`${prefixCls}-content`}
          ref={picture}
          onMouseDown={(e) => {
            handleMove(e);
          }}
          onDoubleClick={initImagePreView}
        >
          {picList.length && <img src={picList[picIndex]} />}
        </div>

        <div className={`${prefixCls}-operation`}>
          <RotateLeftOutlined onClick={() => rotate(false)} />
          <RotateRightOutlined onClick={() => rotate(true)} />
          <RedoOutlined onClick={initImagePreView} />
          <ZoomOutOutlined
            style={{ opacity: size <= 1 ? '0.5' : '1' }}
            onClick={() => setPicSize(false)}
          />
          <ZoomInOutlined onClick={() => setPicSize(true)} />
        </div>
        {picList.length > 0 && (
          <>
            <button
              style={{ opacity: picIndex !== 0 ? 1 : 0.5 }}
              disabled={picIndex <= 0}
              className={`${prefixCls}-previous`}
              onClick={() => setPicIndex(picIndex - 1)}
            >
              <LeftOutlined />
            </button>
            <button
              style={{ opacity: picIndex !== picList.length - 1 ? 1 : 0.5 }}
              disabled={picIndex >= picList.length - 1}
              className={`${prefixCls}-next`}
              onClick={() => setPicIndex(picIndex + 1)}
            >
              <RightOutlined />
            </button>
          </>
        )}
      </div>
    </CSSTransition>,
    document.body,
  );
};

export default ImagePreview;
