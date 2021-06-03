import { TRouterMemo } from "types";

export type RouterMemoState = {
  routerMemo: TRouterMemo;
};

export const initialRouterMemoState: RouterMemoState = {
  routerMemo: {
    "/home": "/home",
    "/portfolio": "/portfolio",
    "/trading": "/trading",
    "/projects": "/projects",
    "/more": "/more",
  },
};
