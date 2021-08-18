import { Locales, ThemeType, ProjectsType } from "types";

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

export interface ProjectsToggleType {
  type: "PROJECTS_TOGGLE_TYPE";
  payload: ProjectsType;
}
export interface ProjectsChangePageSize {
  type: "PROJECTS_CHANGE_PAGESIZE";
  payload: number;
}
export interface UsersChangePageSize {
  type: "USERS_CHANGE_PAGESIZE";
  payload: number;
}

export type Actions =
  | ThemeSetTheme
  | DrawerToggleDrawer
  | LocaleToggleLocale
  | ProjectsToggleType
  | ProjectsChangePageSize
  | UsersChangePageSize;
