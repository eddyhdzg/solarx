import { Locales, ThemeType } from "types";

export type ClientState = {
  themeType: ThemeType;
  drawer: boolean;
  locale: Locales;
  projects: {
    pageSize: number;
    projectType: "cards" | "table";
  };
};

export const initialClientState: ClientState = {
  drawer: true,
  locale: "en",
  themeType: "dark",
  projects: {
    pageSize: 10,
    projectType: "cards",
  },
};
