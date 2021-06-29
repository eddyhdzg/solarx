export type TRouterMemo = { [key in TBaseRoutes]: string };
export type TBaseRoutes =
  // | "/home"
  // | "/trading"
  "/portfolio" | "/crowdfunding" | "/admin" | "/more";
// export type Routes = "home" | "portfolio" | "trading" | "projects" | "more";
export type Routes = "portfolio" | "crowdfunding" | "admin" | "more";
export type SubRoutes = "";

export type Query = { route?: Routes; subRoute?: SubRoutes };

export interface IRoutesPathsTree {
  path: string;
  subRoutes: {
    subPath: string;
    component: React.FC;
  }[];
}
