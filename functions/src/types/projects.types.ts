export interface Project {
  id?: string;
  businessType?: string;
  city?: string;
  company?: string;
  created?: any;
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
