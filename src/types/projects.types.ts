import { Timestamp } from "./firebase.types";

export type ProjectStatus =
  | "canceled"
  | "fundraising"
  | "funded"
  | "operating"
  | "coming soon";

export interface Project {
  id?: string;
  active?: boolean;
  businessType?: string; // Custom
  city?: string; // Custom
  company?: string; // Custom
  created?: Timestamp; // Custom
  description?: string;
  fundedDate?: Timestamp | null; // Custom
  goal?: number; // Custom
  images?: string[] | null;
  investors?: number; // Custom
  metadata?: { [key: string]: string };
  name?: string;
  raised?: number; // Custom
  role?: null;
  operationDate?: Timestamp | null; // Custom
  ppa?: number; // Custom
  releaseDate?: Timestamp | null; // Custom
  roi?: number; // Custom
  sharePrice?: number; // Custom
  sharesSold?: number; // Custom
  state?: string; // Custom
  status?: ProjectStatus; // Custom
  tax_code?: null;
  totalShares?: number; // Custom
}

export interface ProjectPrice {
  id?: string;
  active?: boolean;
  billing_scheme?: "per_unit";
  currency?: "mxn";
  description?: string;
  interval?: null;
  interval_count?: null;
  investors?: string[]; // Custom
  metadata?: { [key: string]: string };
  product?: string;
  quantity?: number; // Custom
  recurring?: null;
  sharePrice?: number; // Custom
  sharesSold?: number; // Custom
  tax_behavior?: "unspecified";
  tiers?: null;
  tiers_mode?: null;
  transform_quantity?: null;
  trial_period_days?: null;
  type?: "one_time";
  unit_amount?: number;
}

export interface ProjectContent {
  about?: string;
  general?: string;
  graphs?: string;
  images?: [];
}

export type Notion = string | null | undefined;
export type ProjectsType = "cards" | "table";
export type ProjectSection = "crowdfunding" | "admin/projects";
export type ProjectForms = "Edit" | "Create";
