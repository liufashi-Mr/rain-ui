import { GithubOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'dumi';
import React from 'react';
import packageJson from '../../package.json';
import './home.less';
const { version } = packageJson;
export default () => {
  const characteristics = [
    {
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
      title: '开箱即用',
      txt: '简单易用，降低使用者的代码量',
    },
    {
      img: 'https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg',
      title: 'TypeScript',
      txt: '使用 TypeScript 开发，提供完整的类型定义文件，更多的代码提示',
    },
    {
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/b8570f4d-c1b1-45eb-a1da-abff53159967/kj9t990h_w144_h144.png',
      title: '自定义主题',
      txt: '支持自定义主题，深色主题，紧凑主题，以及局部主题，满足多样化的产品需求',
    },
    {
      img: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr',
      title: '简单易用',
      txt: '更简洁的API，更多默认配置',
    },
  ];
  return (
    <div className={'homePage'}>
      <div className="alert">
        <div className="alertContainer">
          <span>Rain-ui 期待更多小伙伴的加入 👏</span>
          <a href="https://github.com/liufashi-Mr/rain-ui">
            <GithubOutlined style={{ marginRight: 8 }} />
            前往
            <RightOutlined style={{ marginLeft: 4 }} />
          </a>
        </div>
      </div>
      {/* 内容部分 */}
      <div className={'main'}>
        <div className={'header'}>
          <div className={'headerTop'}>
            <img
              className={'headerImage'}
              alt="header-image"
              src="https://blog.liufashi.top/img/rain-ui.png"
            />
            <span className={'plus'}>+</span>
            <img
              className={'headerImage  rotate'}
              alt="header-image"
              src="http://blog.liufashi.top/img/react.svg"
            />
            <span className={'plus'}>+</span>
            <img
              className={'headerImage'}
              alt="header-image"
              src="http://blog.liufashi.top/img/typescript.svg"
            />
          </div>
          <div className={'headerTop headerBlur'}>
            <img
              className={'headerImage'}
              alt="header-image"
              src="https://blog.liufashi.top/img/rain-ui.png"
            />
            <span className={'plus'}>+</span>
            <img
              className={'headerImage  rotate'}
              alt="header-image"
              src="http://blog.liufashi.top/img/react.svg"
            />
            <span className={'plus'}>+</span>
            <img
              className={'headerImage'}
              alt="header-image"
              style={{ transform: 'scaleX(4.5)' }}
              src="http://blog.liufashi.top/img/typescript.svg"
            />
          </div>
          <div className={'headerBottom'}>
            <h1 className={'title'}>
              Rain-ui <span className={'version'}>v{version}</span>
            </h1>
            <p className={'description'}>智能设计体系，完整主题方案</p>
            <p className={'buttons'}>
              <Link to="/guide">使用指南</Link>
              <Link to="/components">组件</Link>
              <a href="https://github.com/liufashi-Mr/rain-ui">在Github上查看</a>
            </p>
          </div>
        </div>
        {/* 功能特性 */}
        <div className={'group'}>
          <div className={'groupTitle'}>
            <div />
            <span>功能特性</span>
            <div />
          </div>
          <ul className={'features'}>
            {characteristics.map((item) => {
              return (
                <li key={item.title}>
                  <p>
                    <img src={item.img} style={{ width: 74, height: 84 }} />
                  </p>
                  <p>{item.title}</p>
                  <p>{item.txt}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
