import { TTimestamp } from "./firebase.types";

export interface Project {
  id?: string;
  aboutContent?: string;
  archived?: boolean;
  businessType?: string;
  city?: string;
  company?: string;
  coverImage?: string | null;
  created?: TTimestamp;
  fundedDate?: TTimestamp | null;
  generalContent?: string;
  graphsContent?: string;
  goal?: number;
  images?: string[] | null;
  lastUpdate?: TTimestamp;
  investors?: number;
  name?: string;
  operationDate?: TTimestamp | null;
  ppa?: number;
  releaseDate?: TTimestamp | null;
  roi?: number;
  sharePrice?: number;
  sharesSold?: number;
  state?: string;
  status?: string;
  totalShares?: number;
}

export type ProjectStatus =
  | "canceled"
  | "fundraising"
  | "funded"
  | "operating"
  | "coming soon";

export interface BuyingOption {
  id?: string;
  description?: string;
  discount?: number;
  investors?: number;
  lastUpdate?: TTimestamp;
  quantity?: number;
  sharesSold?: number;
  subtitle?: string;
  title?: string;
}

export interface Content {
  id?: string;
  about?: number;
  general?: string;
  graphs?: number;
  lastUpdate?: TTimestamp;
}

export type Notion = string | null | undefined;

export type CreateBuyingOption = Pick<
  BuyingOption,
  "description" | "discount" | "quantity" | "subtitle" | "title"
>;

export type EditBuyingOption = Pick<
  BuyingOption,
  "title" | "subtitle" | "description"
>;

export type ProjectsType = "cards" | "table";
export type ProjectSection = "crowdfunding" | "admin/projects";
export type ProjectForms = "Edit" | "Create";
