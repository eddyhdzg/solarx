import { Locales, ThemeType } from "types";

export type ClientState = {
  themeType: ThemeType;
  drawer: boolean;
  locale: Locales;
  projectType: "cards" | "table";
};

export const initialClientState: ClientState = {
  drawer: true,
  locale: "en",
  themeType: "dark",
  projectType: "cards",
};
