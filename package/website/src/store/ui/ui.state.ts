import { atom } from "recoil";

export const isSidebarOpen = atom({
  key: 'ui/sidebar',
  default: false as boolean
});
