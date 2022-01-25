import * as React from "react";
export type TRouterMemo = { [key in TBaseRoutes]: string };
export type TBaseRoutes = "/wallet" | "/crowdfunding" | "/admin" | "/more";
export type Routes = "wallet" | "crowdfunding" | "admin" | "more";
export type SubRoutes = "";
export type Query = { route?: Routes; subRoute?: SubRoutes };

export interface IRoutesPathsTree {
  path: string;
  subRoutes: {
    subPath: string;
    component: React.FC;
  }[];
}
