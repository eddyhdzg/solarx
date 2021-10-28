import { TTimestamp } from "./firebase.types";

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
  created?: TTimestamp;
  displayName?: string;
  email?: string;
  uid?: string;
  role?: UserRole;
}
