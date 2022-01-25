export interface Share {
  id?: string;
  basePrice?: number;
  owner?: string | null;
  priceId?: string;
  projectId?: string;
  roi?: number;
  unit_amount?: number;
  status?: "available" | "pledged" | "owned";
}
