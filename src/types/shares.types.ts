export interface Share {
  id?: string;
  auctionPrice?: number;
  buyingOption?: string;
  sharePrice?: number;
  status?: "available" | "pledged" | "owned";
  owner?: string | null;
  projectId?: string;
  roi?: number;
}
