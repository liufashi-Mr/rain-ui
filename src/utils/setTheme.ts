import { ThemeVariables } from "src/configProvider/interface";
// import { generate } from '@ant-design/colors';

// const createColorVariables = (theme: ThemeVariables) => {
//   const res = {};
//   Object.keys(theme).forEach((item: keyof ThemeVariables) => {});
//   return res;
// };

export const setThemeConfig = (element: HTMLElement, theme: ThemeVariables): void => {
  Object.keys(theme).forEach((item: keyof ThemeVariables) => {
    if (theme[item]) {
      element.style.setProperty(`--rain-${item}-color`, theme[item] as string);
    }
  });
};

// export const setDarkTheme = (backgroundColor: string) => {
//   generate('#1890ff', {
//     theme: 'dark',
//     backgroundColor,
//   });
// };
