export interface Share {
  id?: string;
  auctionPrice?: number;
  sharePrice?: number;
  status?: "available" | "pledged" | "owned";
  owner?: string | null;
  priceId?: string;
  projectId?: string;
  roi?: number;
}
