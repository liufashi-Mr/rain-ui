export const skinList = [
  {
    title: 'default',
    theme: {},
    config: {},
  },
  {
    title: 'Morandi',
    background: 'url(https://blog.liufashi.top/img/devui.png)',
    theme: { primary: '#5e7ce0', success: '#50d4ab', warning: '#fac20a', error: '#f66f6a' },
    config: { '--rain-border-radius-base': '4px' },
  },
  {
    title: 'ant-design',
    theme: { primary: '#1890ff' },
    config: {
      '--rain-border-radius-base': '2px',
    },
  },
  {
    title: 'tuya-expo',
    theme: { primary: '#ff5500' },
    config: {
      '--rain-border-radius-base': '0px', // 组件/浮层圆角
    },
  },
  {
    title: 'Cyan',
    theme: { primary: '#13c2c2' },
    config: {
      '--rain-border-radius-base': '0px', // 组件/浮层圆角
    },
  },
  {
    title: 'smooth',
    theme: { primary: '#3bd5f8' },
    config: {
      '--rain-border-radius-base': '8px', // 组件/浮层圆角
    },
  },
];
