export interface Share {
  id?: string;
  auctionPrice?: number;
  sharePrice?: number;
  status?: "available" | "auction" | "owned";
  owner?: string | null;
  priceId?: string;
  projectId?: string;
  roi?: number;
}
