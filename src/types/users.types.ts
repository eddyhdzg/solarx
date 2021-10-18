import { TTimestamp } from "./firebase.types";

// Everyone by default
type DefaultUser = "DEFAULT" | null | undefined;
// External users who want to use features first, they can jump back and forward between beta and production.
type BetaUser = "BETA";
// SolarX employees, can see the admin panel, but can't edit info.
type AdminUser = "ADMIN";
// SolarX employees who have permission to edit project's data. Useful for contact support.
type ModeratorUser = "MODERATOR";
// Backend developers who can some critical information and edit user's permissions.
type SuperUser = "SUPER_USER";

export type UserRole =
  | DefaultUser
  | BetaUser
  | AdminUser
  | ModeratorUser
  | SuperUser;

export interface FirestoreUser {
  avatar?: string;
  created?: TTimestamp;
  displayName?: string;
  email?: string;
  uid?: string;
  role?: UserRole;
}
