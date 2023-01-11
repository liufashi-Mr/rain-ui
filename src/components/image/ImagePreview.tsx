import React, { useState, useRef, useEffect } from 'react';
import styles from './style/index.less';
import { createPortal } from 'react-dom';
import { getBarWidth, hasScrollbar } from '../../utils/scrollBar';
import {
  CloseOutlined,
  ZoomInOutlined,
  RotateRightOutlined,
  RotateLeftOutlined,
  LeftOutlined,
  RightOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';

export interface ImagePreviewProps {
  visible?: boolean;
  onClose?: () => void;
  picList: any[];
  startIndex?: number;
}

const ImagePreview = (props: ImagePreviewProps): React.ReactPortal => {
  const { visible, onClose, picList = [], startIndex = 0 } = props;

  const [picIndex, setPicIndex] = useState(startIndex);
  const [deg, setDeg] = useState(0);
  const [size, setSize] = useState(0);
  const picture: any = useRef();
  const initImagePreView = () => {
    setSize(1);
    setDeg(0);
    picture.current.style.left = '50%';
    picture.current.style.top = '50%';
  };
  useEffect(() => {
    initImagePreView();
    setPicIndex(0);
    document.body.style.overflow = visible ? 'hidden' : '';
    hasScrollbar()
      ? (document.body.style.width = visible ? `calc( 100% - ${getBarWidth() + 'px'})` : '')
      : '';
  }, [visible]);

  useEffect(() => {
    initImagePreView();
  }, [picIndex]);

  useEffect(() => {
    picture.current.style.transform = `translate(-50%,-50%) scale(${size}) rotate(${deg}deg) `;
  }, [size, deg]);

  const ImageRotate = (flag: boolean) => (flag ? setDeg(deg + 90) : setDeg(deg - 90));

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
    <div
      style={visible ? { width: '100vw', height: '100vh', opacity: 1, zIndex: 2000 } : {}}
      className={styles.mask}
      onWheel={(e) => handleChangeSize(e)}
    >
      <header>
        <div onClick={() => ImageRotate(false)}>
          <RotateLeftOutlined />
        </div>
        <div onClick={() => ImageRotate(true)}>
          <RotateRightOutlined />
        </div>
        <div style={{ opacity: size <= 1 ? '0.5' : '1' }} onClick={() => setPicSize(false)}>
          <ZoomOutOutlined />
        </div>
        <div onClick={() => setPicSize(true)}>
          <ZoomInOutlined />
        </div>
        <div className={styles.delete} onClick={onClose}>
          <CloseOutlined />
        </div>
      </header>
      <div
        className={styles.content}
        ref={picture}
        onMouseDown={(e) => {
          handleMove(e);
        }}
        onDoubleClick={initImagePreView}
      >
        {picList.length && <img src={picList[picIndex]} />}
      </div>
      {picList.length > 1 && (
        <div className={styles.btn}>
          <button
            style={picIndex !== 0 ? {} : { cursor: 'not-allowed', opacity: '0.5' }}
            disabled={picIndex <= 0}
            className={styles.left}
            onClick={() => setPicIndex(picIndex - 1)}
          >
            <LeftOutlined />
          </button>
          <button
            style={picIndex !== picList.length - 1 ? {} : { cursor: 'not-allowed', opacity: '0.5' }}
            disabled={picIndex >= picList.length - 1}
            className={styles.right}
            onClick={() => setPicIndex(picIndex + 1)}
          >
            <RightOutlined />
          </button>
        </div>
      )}
    </div>,
    document.body,
  );
};

export default ImagePreview;
