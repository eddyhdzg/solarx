import { Locales, TRouterMemo, ThemeType } from "types";

export type ClientState = {
  themeType: ThemeType;
  drawer: boolean;
  locale: Locales;
  routerMemo: TRouterMemo;
};

export const initialClientState: ClientState = {
  themeType: "dark",
  drawer: true,
  locale: "es",
  routerMemo: {
    "/home": "/home",
    "/portfolio": "/portfolio",
    "/trading": "/trading",
    "/projects": "/projects",
    "/more": "/more",
  },
};
