export interface Project {
  id: number | string;
  name: string;
  location: string;
  funded: boolean;
  sharesSold: number;
  totalShares: number;
  sharePrice: number;
  ror: number;
  img?: string;
  images?: string[];
}

export type ProjectsType = "cards" | "table";
