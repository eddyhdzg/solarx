export type Routes = "home" | "portfolio" | "trading" | "projects" | "more";
export type SubRoutes = "";

export type Query = { section?: Routes; subSection?: SubRoutes };
