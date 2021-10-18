import { TTimestamp } from "./firebase.types";

export interface Project {
  id?: string;
  archived?: boolean;
  businessType?: string;
  city?: string;
  company?: string;
  coverImage?: string | null;
  created?: TTimestamp;
  fundedDate?: TTimestamp | null;
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

export interface Discount {
  id?: string;
  description?: string;
  discount?: number;
  investors?: number;
  lastUpdate?: TTimestamp;
  name?: string;
  quantity?: number;
  sharesSold?: number;
}

export type CreateDiscount = Pick<
  Discount,
  "name" | "description" | "discount" | "quantity"
>;

export type EditDiscount = Pick<Discount, "name" | "description">;

export type ProjectsType = "cards" | "table";

export type ProjectSection = "crowdfunding" | "admin/projects";

export type ProjectForms = "Edit" | "Create";
