import { TRouterMemo } from "types";

export type RouterMemoState = {
  routerMemo: TRouterMemo;
};

export const initialRouterMemoState: RouterMemoState = {
  routerMemo: {
    "/portfolio": "/portfolio",
    "/admin": "/admin",
    "/crowdfunding": "/crowdfunding",
    "/more": "/more",
  },
};
