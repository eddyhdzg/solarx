export interface Project {
  coverImage?: string | null;
  id?: string;
  businessType?: string;
  city?: string;
  company?: string;
  created?: Date;
  images?: string[];
  name?: string;
  ppa?: number;
  ror?: number;
  sharesSold?: number;
  sharePrice?: number;
  state?: string;
  totalShares?: number;
}

export type ProjectsType = "cards" | "table";
