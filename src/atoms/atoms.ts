import { atom } from 'recoil';

export const themeState = atom({
  key: 'isDarkMode',
  default: false,
});
