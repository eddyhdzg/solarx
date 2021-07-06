import firebase from "firebase";

export type Timestamp = firebase.firestore.Timestamp;

export interface Project {
  coverImage?: string | null;
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
