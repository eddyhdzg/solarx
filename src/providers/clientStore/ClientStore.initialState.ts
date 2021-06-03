import { Locales, TRouterMemo, ThemeType } from "types";

export type ClientState = {
  themeType: ThemeType;
  drawer: boolean;
  locale: Locales;
  routerMemo: TRouterMemo;
};

export const initialClientState: ClientState = {
  drawer: true,
  locale: "en",
  routerMemo: {
    "/home": "/home",
    "/portfolio": "/portfolio",
    "/trading": "/trading",
    "/projects": "/projects",
    "/more": "/more",
  },
  themeType: "dark",
};
