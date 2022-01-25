import { serverTimestamp } from "../config";
import { Project, ProjectPrice, FirestoreUser, Timestamp } from "solarx-types";

export const mockProject: Project = {
  active: true,
  description: "project autocreated by a local project.",
  images: [
    "https://files.stripe.com/links/MDB8YWNjdF8xSUFMeHRMZ0phdDVFOG41fGZsX3Rlc3RfMVZpZ0NlNVhtaWNDQk9mZzBURWg0R2Vt00v2BcSoaF",
  ],
  metadata: {},
  name: `Local project #1`,
  role: null,
  tax_code: null,
  totalShares: 9000,
  basePrice: 1000,
  businessType: "",
  city: "",
  company: "",
  created: serverTimestamp() as Timestamp,
  fundedDate: null,
  goal: 1,
  investors: 0,
  raised: 0,
  operationDate: null,
  ppa: 0,
  releaseDate: null,
  roi: 1,
  sharesSold: 0,
  state: "",
  status: "coming soon",
};

export const mockProjectPrice: ProjectPrice = {
  active: true,
  billing_scheme: "per_unit",
  currency: "mxn",
  description: "",
  interval: null,
  interval_count: null,
  investors: 0,
  metadata: {},
  product: "",
  quantity: 1,
  recurring: null,
  basePrice: 1000,
  sharesSold: 0,
  tax_behavior: "unspecified",
  tiers: null,
  tiers_mode: null,
  transform_quantity: null,
  trial_period_days: null,
  type: "one_time",
  unit_amount: 1,
};

export const mockUser: FirestoreUser = {
  avatar: "",
  created: serverTimestamp() as Timestamp,
  displayName: "",
  role: "DEFAULT",
  stripeId: "",
  stripeLink: "",
};
