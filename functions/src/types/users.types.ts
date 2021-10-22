import { TTimestamp } from "./projects.types";

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
  created?: TTimestamp | FirebaseFirestore.FieldValue;
  displayName?: string;
  email?: string;
  lastUpdate?: TTimestamp | FirebaseFirestore.FieldValue;
  uid?: string;
  role?: UserRole;
}
