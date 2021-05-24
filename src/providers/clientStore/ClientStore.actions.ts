import { Locales, TBaseRoutes, ThemeType } from "types";

export interface LocaleToggleLocale {
  type: "LOCALE_TOGGLE_LOCALE";
  payload: Locales;
}

export interface ThemeSetTheme {
  type: "THEME_SET_THEME";
  payload: ThemeType;
}

export interface DrawerToggleDrawer {
  type: "DRAWER_TOGGLE_DRAWER";
  payload: boolean;
}

export interface RouterMemoUpdateMemo {
  type: "ROUTERMEMO_UPDATE_MEMO";
  payload: { key: TBaseRoutes; route: string };
}

export type Actions =
  | ThemeSetTheme
  | DrawerToggleDrawer
  | LocaleToggleLocale
  | RouterMemoUpdateMemo;
