import { Timestamp } from "./firebase.types";
import { PaymentMethod as StripePaymentMethod } from "@stripe/stripe-js";

// Everyone by default
export type DefaultUser = "DEFAULT";
// External users who want to use features first, they can jump back and forward between beta and production.
export type BetaUser = "BETA";
// SolarX employees, can see the admin panel, but can't edit info.
export type AdminUser = "ADMIN";
// SolarX employees who have permission to edit project's data. Useful for contact support.
export type ModeratorUser = "MODERATOR";
// Backend developers who can some critical information and edit user's permissions.
export type SuperUser = "SUPER_USER";

export type UserRole =
  | DefaultUser
  | BetaUser
  | AdminUser
  | ModeratorUser
  | SuperUser
  | null
  | undefined;

export interface FirestoreUser {
  anonymous?: boolean;
  avatar?: string;
  created?: Timestamp;
  displayName?: string;
  email?: string;
  uid?: string;
  role?: UserRole;
  stripeId?: string;
  stripeLink?: string;
}
export interface UserHistory {
  id?: string;
  amount?: number;
  avatar?: string;
  card?: {
    brand?: string;
    last4?: string;
  };
  currency?: "mxn" | "usd" | "sxp";
  date?: Timestamp;
  description?: string;
  qty?: number;
  receipt_number?: string;
  receipt_url?: string;
  title?: string;
  type?: "crowdfund";
}

export interface UserPanel {
  id?: string;
  avatar?: string;
  basePrice?: number;
  name?: string;
  quantity?: number;
  roi?: number;
}

export interface UserTransaction {
  id?: string;
  cash?: number;
  date?: Timestamp;
  panels?: number;
  sxp?: number;
  total?: number;
}

// fixme
export interface UserWallet {
  cash?: number;
  // fullName?: string;
  // lastNames?: string;
  panels?: number;
  sxp?: number;
  total?: number;
}

export interface Checkout {
  cancel_url?: string;
  client?: "web";
  created?: Timestamp;
  mode?: "payment";
  price?: string;
  quantity?: number;
  sessionId?: string;
  success_url?: string;
  error?: {
    message: string;
  };
  url?: string;
}

export interface PaymentMethod extends Partial<StripePaymentMethod> {}
