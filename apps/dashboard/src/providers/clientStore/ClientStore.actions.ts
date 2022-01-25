import { BackButton, Locales, ProjectsType } from "solarx-types";

export interface BackButton_Change_Data {
  type: "BACKBUTTON_CHANGE_DATA";
  payload: BackButton;
}

export interface LocaleToggleLocale {
  type: "LOCALE_TOGGLE_LOCALE";
  payload: Locales;
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
  | BackButton_Change_Data
  | LocaleToggleLocale
  | ProjectsToggleType
  | ProjectsChangePageSize
  | UsersChangePageSize;
