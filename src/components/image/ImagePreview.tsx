import React, { useState, useRef, useEffect } from 'react';
import './style/preview.less';
import { createPortal } from 'react-dom';
import { getBarWidth, hasScrollbar } from '../../utils/scrollBar';
import { CSSTransition } from 'react-transition-group';
import type { ImagePreviewProps } from './interface';
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

const prefixCls = 'rain-image-preview';
const ImagePreview = (props: ImagePreviewProps): React.ReactPortal => {
  const { visible, onClose, startIndex = 0 } = props;
  let imagePreviewSrc = props.imagePreviewSrc || [];
  if (typeof imagePreviewSrc === 'string') {
    imagePreviewSrc = [imagePreviewSrc];
  }
  const [imageIndex, setImageIndex] = useState<number>(startIndex);
  const [deg, setDeg] = useState(0);
  const [size, setSize] = useState(0);
  const ImageRef = useRef<HTMLDivElement>(null);
  const initImagePreView = () => {
    setSize(1);
    setDeg(0);
    if (ImageRef.current) {
      ImageRef.current.style.left = '50%';
      ImageRef.current.style.top = '50%';
    }
  };
  useEffect(() => {
    initImagePreView();
    setImageIndex(startIndex);
    if (hasScrollbar()) {
      if (visible) {
        document.body.style.overflowY = 'hidden';
        document.body.style.width = `calc( 100% - ${getBarWidth()}px )`;
      } else {
        const timer = setTimeout(() => {
          document.body.style.width = '';
          document.body.style.overflowY = '';
          clearTimeout(timer);
        }, 300);
      }
    }
  }, [visible]);

  useEffect(() => {
    initImagePreView();
  }, [imageIndex]);

  useEffect(() => {
    if (ImageRef.current) {
      ImageRef.current.style.transform = `translate(-50%,-50%) scale(${size}) rotate(${deg}deg) `;
    }
  }, [size, deg]);

  const rotate = (flag: boolean) => (flag ? setDeg(deg + 90) : setDeg(deg - 90));

  const setImageSize = (flag: boolean) =>
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
    if (!ImageRef.current) return;
    const initPageX = event.pageX;
    const initPageY = event.pageY;
    const initLeft = ImageRef.current.offsetLeft;
    const initTop = ImageRef.current.offsetTop;
    window.onmousemove = (e) => {
      if (!ImageRef.current) return;
      const distanceX = e.pageX - initPageX;
      const distanceY = e.pageY - initPageY;
      ImageRef.current.style.left = initLeft + distanceX + 'px';
      ImageRef.current.style.top = initTop + distanceY + 'px';
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
          {imagePreviewSrc.length > 1 && <div>{`${imageIndex + 1}/${imagePreviewSrc.length}`}</div>}
          <div className={`${prefixCls}-header-close`} onClick={onClose}>
            <CloseOutlined />
          </div>
        </header>
        <div
          className={`${prefixCls}-content`}
          ref={ImageRef}
          onMouseDown={(e) => {
            handleMove(e);
          }}
          onDoubleClick={initImagePreView}
        >
          {imagePreviewSrc.length && <img src={imagePreviewSrc[imageIndex]} />}
        </div>

        <div className={`${prefixCls}-operation`}>
          <RotateLeftOutlined onClick={() => rotate(false)} />
          <RotateRightOutlined onClick={() => rotate(true)} />
          <RedoOutlined onClick={initImagePreView} />
          <ZoomOutOutlined
            style={{ opacity: size <= 1 ? '0.5' : '1' }}
            onClick={() => setImageSize(false)}
          />
          <ZoomInOutlined onClick={() => setImageSize(true)} />
        </div>
        {imagePreviewSrc.length > 1 && (
          <>
            <button
              style={{ opacity: imageIndex !== 0 ? 1 : 0.5 }}
              disabled={imageIndex <= 0}
              className={`${prefixCls}-previous`}
              onClick={() => setImageIndex(imageIndex - 1)}
            >
              <LeftOutlined />
            </button>
            <button
              style={{ opacity: imageIndex !== imagePreviewSrc.length - 1 ? 1 : 0.5 }}
              disabled={imageIndex >= imagePreviewSrc.length - 1}
              className={`${prefixCls}-next`}
              onClick={() => setImageIndex(imageIndex + 1)}
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
