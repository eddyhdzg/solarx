import { TRouterMemo } from "types";

export type RouterMemoState = {
  routerMemo: TRouterMemo;
};

export const initialRouterMemoState: RouterMemoState = {
  routerMemo: {
    // "/home": "/home",
    "/portfolio": "/portfolio",
    // "/trading": "/trading",
    "/admin": "/admin",
    "/crowdfunding": "/crowdfunding",
    "/more": "/more",
  },
};
