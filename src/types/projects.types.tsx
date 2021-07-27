import firebase from "firebase";

export type Timestamp = firebase.firestore.Timestamp;

export interface Project {
  coverImage?: string | null;
  // coverImage?: string ;
  id?: string;
  businessType?: string;
  city?: string;
  company?: string;
  created?: Timestamp;
  images?: string[];
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
