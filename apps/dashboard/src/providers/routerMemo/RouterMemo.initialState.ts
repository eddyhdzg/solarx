import { TRouterMemo } from "solarx-types";

export type RouterMemoState = {
  routerMemo: TRouterMemo;
};

export const initialRouterMemoState: RouterMemoState = {
  routerMemo: {
    "/wallet": "/wallet",
    "/admin": "/admin",
    "/crowdfunding": "/crowdfunding",
    "/more": "/more",
  },
};
