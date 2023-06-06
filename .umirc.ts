import { defineConfig } from 'dumi';

const APP_NAME = 'rain-ui';

export default defineConfig({
  title: 'Rain-ui',
  mode: 'site',
  favicon: 'https://blog.liufashi.top/img/rain-ui.svg',
  logo: 'https://blog.liufashi.top/img/rain-ui.svg',
  outputPath: 'docs-dist',
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      // 需要忽略的属性名列表，默认为空数组
      skipPropsWithName: [''],
      // 是否忽略没有文档说明的属性，默认值为 false
      skipPropsWithoutDoc: true,
    },
  },
  resolve: {
    passivePreview: true,
  },
  themeConfig: {
    carrier: 'dumi', // 设备状态栏左侧的文本内容
    hd: true,
  },
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '博客',
      path: 'https://blog.liufashi.top/',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/liufashi-Mr/rain-ui',
    },
  ],
  publicPath: process.env.NODE_ENV === 'production' ? `/${APP_NAME}/` : '/',
});
