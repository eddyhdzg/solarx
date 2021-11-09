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
