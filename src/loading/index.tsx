import React from 'react';
import ReactDom from 'react-dom';
import './style';

import cls from 'classnames';

export interface ILoadingProps extends config {
  /**
   * @description     是否加载中
   * @default         false
   * @type            boolean
   */
  loading?: boolean;
  /**
   * @description     是否全局loading
   * @default         false
   * @type            boolean
   */
  global?: boolean;
}

export interface config {
  /**
   * @description       Loading 的文本
   * @default           ''
   * @type              string
   */
  text?: string;
  /**
   * @description     icon 的尺寸
   * @default         'normal'
   * @type            string
   */
  size?: 'mini' | 'normal' | 'large';
  /**
   * @description     出现的延迟(ms)
   * @default         0
   * @type            number
   */
  delay?: number;
}

export interface ExtendsType {
  show(params?: config): void;
  hide(): void;
}

export type LoadingCom<p> = React.FC<p> & ExtendsType;

// function Single() {
//   this.instance = null;
//   this.container = null;
//   this.config = {
//     text: '',
//     size: 'normal',
//     delay: 0
//   };
//   this.el = null;
// }

// Single.getInstance = function () {
//   if (!this.instance) {
//     this.instance = new Single();
//   }
//   return this.instance;
// };

const ANIMATION_TIME = 300;

class Single {
  [x: string]: any;
  static instance: any;
  constructor() {
    this.instance = null;
    this.container = null;
    this.el = null;
    this.config = {
      text: '',
      size: 'normal',
      delay: 0,
    };
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new Single();
    }
    return this.instance;
  }
}

Single.prototype.init = function () {
  this.container = document.createElement('div');
  this.container.className = 'expo-cn-loading-container';
  document.body.appendChild(this.container);
};

Single.prototype.remove = function () {
  if (this.container && this.el) {
    document.body.removeChild(this.container);
  }
  this.container = null;
  this.el = null;
  this.instance = null;
};

Single.prototype.show = function (params?: config) {
  if (this.container) return; // 同时只存在一个全局loading
  this.init();
  this.config = params;
  this.el = <Loading loading {...this.config} global />;
  document.documentElement.style.overflow = 'hidden';
  ReactDom.render(this.el, this.container);
};

Single.prototype.hide = function () {
  if (!this.container || !this.el) return;
  this.el = <Loading loading={false} {...this.config} global />;
  document.documentElement.style.overflow = 'auto';
  ReactDom.render(this.el, this.container);
  setTimeout(() => {
    this.remove();
  }, ANIMATION_TIME);
};

const Loading: LoadingCom<ILoadingProps> = ({
  children,
  size = 'normal',
  loading = false,
  text,
  global,
  delay = 0,
}) => {
  return global ? (
    <div
      style={{
        animationDuration: ANIMATION_TIME / 1000 + 's',
        animationDelay: delay / 1000 + 's',
      }}
      className={cls('loadingMask', {
        ['show']: loading,
        ['hide']: !loading,
        ['mini']: size === 'mini',
        ['normal']: size === 'normal',
        ['large']: size === 'large',
      })}
    >
      <i className="icon" style={{ animationDelay: delay / 1000 + 's' }}>
        <svg
          //@ts-ignore
          t="1630379051109"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="9715"
          width={size === 'mini' ? 14 : size === 'normal' ? 22 : 24}
          height={size === 'mini' ? 14 : size === 'normal' ? 22 : 24}
        >
          <path
            d="M557.511 45.511v199.111c0 22.756-22.755 39.822-45.511 39.822s-45.511-17.066-45.511-45.51V45.51C466.489 17.067 489.244 0 512 0s45.511 17.067 45.511 45.511z m0 739.556v199.11c0 22.756-22.755 39.823-45.511 39.823s-45.511-17.067-45.511-45.511V779.378c0-22.756 22.755-39.822 45.511-39.822s45.511 17.066 45.511 45.51zM210.49 147.91l142.22 142.223c17.067 17.067 17.067 45.511 0 62.578s-45.511 17.067-62.578 0L147.911 210.49c-17.067-17.067-17.067-45.511 0-62.578s45.511-17.067 62.578 0z m523.377 523.38l142.222 142.22c17.067 17.067 17.067 45.511 0 62.578s-45.511 17.067-62.578 0L671.29 733.867c-17.067-17.067-17.067-45.511 0-62.578s45.511-17.067 62.578 0z m142.222-460.8L733.867 352.71c-17.067 17.067-45.511 17.067-62.578 0s-17.067-45.511 0-62.578L813.51 147.911c17.067-17.067 45.511-17.067 62.578 0s17.067 45.511 0 62.578zM352.71 733.867L210.49 876.089c-17.067 17.067-45.511 17.067-62.578 0s-17.067-45.511 0-62.578L290.133 671.29c17.067-17.067 45.511-17.067 62.578 0s17.067 45.511 0 62.578zM978.49 557.51H779.378c-22.756 0-39.822-22.755-39.822-45.511s17.066-45.511 45.51-45.511h199.112c22.755 0 39.822 22.755 39.822 45.511s-17.067 45.511-45.511 45.511z m-739.556 0H45.511C17.067 557.511 0 534.756 0 512s17.067-45.511 45.511-45.511h199.111c22.756 0 39.822 22.755 39.822 45.511s-17.066 45.511-45.51 45.511z"
            p-id="9716"
            fill="#1890ff"
          ></path>
        </svg>
      </i>
      {text && <p className={'text'}>{text}</p>}
    </div>
  ) : (
    <div className={'loadingContainer'}>
      {children}
      <div
        style={{
          animationDuration: ANIMATION_TIME / 1000 + 's',
          animationDelay: delay / 1000 + 's',
        }}
        className={cls('loadingMask', {
          ['show']: loading,
          ['hide']: !loading,
          ['mini']: size === 'mini',
          ['normal']: size === 'normal',
          ['large']: size === 'large',
          ['global']: global,
        })}
      >
        <i className="icon" style={{ animationDelay: delay / 1000 + 's' }}>
          <svg
            //@ts-ignore
            t="1630379051109"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="9715"
            width={size === 'mini' ? 14 : size === 'normal' ? 22 : 24}
            height={size === 'mini' ? 14 : size === 'normal' ? 22 : 24}
          >
            <path
              d="M557.511 45.511v199.111c0 22.756-22.755 39.822-45.511 39.822s-45.511-17.066-45.511-45.51V45.51C466.489 17.067 489.244 0 512 0s45.511 17.067 45.511 45.511z m0 739.556v199.11c0 22.756-22.755 39.823-45.511 39.823s-45.511-17.067-45.511-45.511V779.378c0-22.756 22.755-39.822 45.511-39.822s45.511 17.066 45.511 45.51zM210.49 147.91l142.22 142.223c17.067 17.067 17.067 45.511 0 62.578s-45.511 17.067-62.578 0L147.911 210.49c-17.067-17.067-17.067-45.511 0-62.578s45.511-17.067 62.578 0z m523.377 523.38l142.222 142.22c17.067 17.067 17.067 45.511 0 62.578s-45.511 17.067-62.578 0L671.29 733.867c-17.067-17.067-17.067-45.511 0-62.578s45.511-17.067 62.578 0z m142.222-460.8L733.867 352.71c-17.067 17.067-45.511 17.067-62.578 0s-17.067-45.511 0-62.578L813.51 147.911c17.067-17.067 45.511-17.067 62.578 0s17.067 45.511 0 62.578zM352.71 733.867L210.49 876.089c-17.067 17.067-45.511 17.067-62.578 0s-17.067-45.511 0-62.578L290.133 671.29c17.067-17.067 45.511-17.067 62.578 0s17.067 45.511 0 62.578zM978.49 557.51H779.378c-22.756 0-39.822-22.755-39.822-45.511s17.066-45.511 45.51-45.511h199.112c22.755 0 39.822 22.755 39.822 45.511s-17.067 45.511-45.511 45.511z m-739.556 0H45.511C17.067 557.511 0 534.756 0 512s17.067-45.511 45.511-45.511h199.111c22.756 0 39.822 22.755 39.822 45.511s-17.066 45.511-45.51 45.511z"
              p-id="9716"
              fill="#1890ff"
            ></path>
          </svg>
        </i>
        {text && <p className={'text'}>{text}</p>}
      </div>
    </div>
  );
};

Loading.show = (params) => {
  Single.getInstance().show(params);
};

Loading.hide = () => {
  Single.getInstance().hide();
};

export default Loading;
