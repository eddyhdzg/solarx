import { Timestamp } from "firebase/firestore";

type DefaultUser = "DEFAULT" | null | undefined;
type BetaUser = "BETA";
type AdminUser = "ADMIN";
type ModeratorUser = "MODERATOR";
type SuperUser = "SUPER_USER";

export type UserRole =
  | DefaultUser
  | BetaUser
  | AdminUser
  | ModeratorUser
  | SuperUser;

export interface FirestoreUser {
  avatar?: string;
  created?: Timestamp | FirebaseFirestore.FieldValue;
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
  currency?: "mxn" | "usd" | "sxp";
  date?: Timestamp;
  description?: string;
  title?: string;
  tags?: string[];
}

export interface UserTransaction {
  id?: string;
  cash?: number;
  date?: Timestamp;
  stocks?: number;
  sxp?: number;
  total?: number;
}

export interface UserWallet {
  cash?: number;
  stocks?: number;
  sxp?: number;
  total?: number;
}

export interface UserShares {
  avatar?: string;
  name?: string;
  roi?: number;
  sharePrice?: number;
  shares?: number;
}
