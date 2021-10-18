import { Timestamp } from "firebase/firestore";

export type TTimestamp = Timestamp;

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
