export type Routes = "home" | "portfolio" | "trading" | "projects" | "more";
export type SubRoutes = "";

export type Query = { route?: Routes; subRoute?: SubRoutes };
