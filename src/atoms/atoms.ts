import { atom } from "recoil";

export const themeState = atom({
  key: "isDarkMode",
  default: false,
});

export const searchModalState = atom({
  key: "searchModalState", // 이 atom의 고유한 ID
  default: false, // 기본값
});
