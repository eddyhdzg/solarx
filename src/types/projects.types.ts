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

export interface Discount {
  id?: string;
  name?: string;
  description?: string;
  discount?: number;
  quantity?: number;
  sold?: number;
}

export interface NewDiscount extends Omit<Discount, "id" | "sold"> {}

export type ProjectsType = "cards" | "table";

export type ProjectSection = "crowdfunding" | "admin/projects";

export type ProjectForms = "Edit" | "Create";
