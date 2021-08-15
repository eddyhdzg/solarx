import { Timestamp } from "./firebase.types";

export interface Project {
  id?: string;
  businessType?: string;
  city?: string;
  company?: string;
  created?: Timestamp;
  coverImage?: string | null;
  images?: string[] | null;
  name?: string;
  ppa?: number;
  ror?: number;
  sharesSold?: number;
  sharePrice?: number;
  softDelete?: boolean;
  state?: string;
  totalShares?: number;
}

export type ProjectsType = "cards" | "table";

export type ProjectSection = "crowdfunding" | "admin";

export type ProjectForms = "Edit" | "Create";
