export type TRouterMemo = { [key in TBaseRoutes]: string };
export type TBaseRoutes =
  | "/home"
  | "/portfolio"
  | "/trading"
  | "/projects"
  | "/more";
export type Routes = "home" | "portfolio" | "trading" | "projects" | "more";
export type SubRoutes = "";

export type Query = { route?: Routes; subRoute?: SubRoutes };

export interface IRoutesPathsTree {
  path: string;
  subRoutes: {
    subPath: string;
  }[];
}
