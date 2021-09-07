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
  roi?: number;
  sharesSold?: number;
  sharePrice?: number;
  archived?: boolean;
  state?: string;
  totalShares?: number;
}

export type ProjectsType = "cards" | "table";

export type ProjectSection = "crowdfunding" | "admin/projects";

export type ProjectForms = "Edit" | "Create";
