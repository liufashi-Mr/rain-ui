import React, { useContext, useState } from 'react';
import type { IRouteComponentProps } from '@umijs/types';
import { context, Link } from 'dumi/theme';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import SlugList from './components/SlugList';
import SearchBar from './components/SearchBar';
import { usePrefersColor } from 'dumi/theme';
import { ConfigProvider, Modal, Space, message } from 'raind/src';
import {
  CompressOutlined,
  VerticalAlignTopOutlined,
  SkinOutlined,
  CheckCircleFilled,
} from '@ant-design/icons';
import './style/layout.less';
import { skinList } from './theme';
const Hero = (hero) => (
  <>
    <div className="__dumi-default-layout-hero">
      {hero.image && <img src={hero.image} />}
      <h1>{hero.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: hero.desc }} />
      {hero.actions &&
        hero.actions.map((action) => (
          <Link to={action.link} key={action.text}>
            <button type="button">{action.text}</button>
          </Link>
        ))}
    </div>
  </>
);

const Features = (features) => (
  <div className="__dumi-default-layout-features">
    {features.map((feat) => (
      <dl key={feat.title} style={{ backgroundImage: feat.icon ? `url(${feat.icon})` : undefined }}>
        {feat.link ? (
          <Link to={feat.link}>
            <dt>{feat.title}</dt>
          </Link>
        ) : (
          <dt>{feat.title}</dt>
        )}
        <dd dangerouslySetInnerHTML={{ __html: feat.desc }} />
      </dl>
    ))}
  </div>
);

const Layout: React.FC<IRouteComponentProps> = ({ children, location }) => {
  const {
    config: { mode, repository },
    meta,
    locale,
  } = useContext(context);
  const [color, setColor] = usePrefersColor();
  const [compact, setCompact] = useState(false);

  const [visible, setVisible] = useState(false);
  const [currentThemeTitle, setCurrentThemeTitle] = useState<any>(
    localStorage.getItem('currentThemeTitle') || 'default',
  );
  const [rainSkin, setRainSkin] = useState<any>(
    skinList[skinList.findIndex((x) => x.title === currentThemeTitle)],
  );
  const { url: repoUrl, branch, platform } = repository;
  const [menuCollapsed, setMenuCollapsed] = useState<boolean>(true);
  const isSiteMode = mode === 'site';
  const showHero = isSiteMode && meta.hero;
  const showFeatures = isSiteMode && meta.features;
  const showSideMenu = meta.sidemenu !== false && !showHero && !showFeatures && !meta.gapless;
  const showSlugs =
    !showHero &&
    !showFeatures &&
    Boolean(meta.slugs?.length) &&
    (meta.toc === 'content' || meta.toc === undefined) &&
    !meta.gapless;
  const isCN = /^zh|cn$/i.test(locale as string);
  const updatedTimeIns = new Date(meta.updatedTime);
  const updatedTime: any = `${updatedTimeIns.toLocaleDateString([], {
    hour12: false,
  })} ${updatedTimeIns.toLocaleTimeString([], { hour12: false })}`;
  const repoPlatform =
    { github: 'GitHub', gitlab: 'GitLab' }[
      (repoUrl || '').match(/(github|gitlab)/)?.[1] || 'nothing'
    ] || platform;

  return (
    <ConfigProvider
      dark={color === 'dark'}
      compact={compact}
      theme={rainSkin?.theme}
      config={rainSkin?.config}
    >
      <div
        className="__dumi-default-layout"
        data-route={location.pathname}
        data-show-sidemenu={String(showSideMenu)}
        data-show-slugs={String(showSlugs)}
        data-site-mode={isSiteMode}
        data-gapless={String(!!meta.gapless)}
        onClick={() => {
          if (menuCollapsed) return;
          setMenuCollapsed(true);
        }}
      >
        <Navbar
          location={location}
          navPrefix={<SearchBar />}
          onMobileMenuClick={(ev) => {
            setMenuCollapsed((val) => !val);
            ev.stopPropagation();
          }}
        />
        <SideMenu mobileMenuCollapsed={menuCollapsed} location={location} />
        {showSlugs && <SlugList slugs={meta.slugs} className="__dumi-default-layout-toc" />}
        {showHero && Hero(meta.hero)}
        {showFeatures && Features(meta.features)}
        <div className="__dumi-default-layout-content">
          {children}
          {!showHero && !showFeatures && meta.filePath && !meta.gapless && (
            <div className="__dumi-default-layout-footer-meta">
              {repoPlatform && (
                <Link to={`${repoUrl}/edit/${branch}/${meta.filePath}`}>
                  {isCN ? `在 ${repoPlatform} 上编辑此页` : `Edit this doc on ${repoPlatform}`}
                </Link>
              )}
              <span data-updated-text={isCN ? '最后更新时间：' : 'Last update: '}>
                {updatedTime}
              </span>
            </div>
          )}
          {(showHero || showFeatures) && meta.footer && (
            <div
              className="__dumi-default-layout-footer"
              dangerouslySetInnerHTML={{ __html: meta.footer }}
            />
          )}
        </div>
        <div
          className={
            '__dumi-default-layout-controller ' +
            (color === 'dark' ? '__dumi-default-layout-controller-dark' : '')
          }
        >
          <div onClick={() => setVisible(true)} title={'自定义主题'}>
            <SkinOutlined />
          </div>
          <div
            onClick={() => setColor(color === 'light' ? 'dark' : 'light')}
            title={color === 'light' ? '浅色主题' : '深色主题'}
          >
            {color === 'light' ? '☀️' : '🌛'}
          </div>
          <div
            onClick={() => setCompact((val) => !val)}
            className={compact ? '__dumi-default-layout-controller-compact' : ''}
          >
            <CompressOutlined />
          </div>
          <div
            onClick={() => {
              document.body.scrollTop = document.documentElement.scrollTop = 0;
            }}
          >
            <VerticalAlignTopOutlined />
          </div>
        </div>
        <Modal
          type="info"
          title="选择主题"
          visible={visible}
          width={604}
          onCancel={() => setVisible(false)}
          onConfirm={() => {
            localStorage.setItem('currentThemeTitle', currentThemeTitle);
            const index = skinList.findIndex((x) => x.title === currentThemeTitle);
            const hide = message.loading({
              content: `${currentThemeTitle}主题切换中`,
              onClose() {
                message.success(`已切换为${currentThemeTitle}主题`);
              },
            });
            setTimeout(() => {
              hide();
              setRainSkin(skinList[index]);
            }, 1000);
            setVisible(false);
          }}
        >
          <Space style={{ marginTop: 16 }} size={['16px', '8px']}>
            {skinList.map((x) => (
              <div
                key={x.title}
                className="__dumi-default-layout-controller-skin-item"
                onClick={() => setCurrentThemeTitle(x.title)}
                style={{
                  background: x.background,
                  borderColor:
                    x.title === currentThemeTitle ? 'var(--rain-primary-color)' : 'transparent',
                }}
              >
                {x.title}
                {x.title === currentThemeTitle && (
                  <CheckCircleFilled style={{ color: 'var(--rain-primary-color)' }} />
                )}
              </div>
            ))}
          </Space>
        </Modal>
      </div>
    </ConfigProvider>
  );
};

export default Layout;
