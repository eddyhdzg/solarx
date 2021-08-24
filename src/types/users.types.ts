// Everyone by default
type DefaultUser = "default" | null | undefined;
// External users who want to use features first, they can jump back and forward between beta and production.
type BetaUser = "beta";
// SolarX employees, can see the admin panel, but can't edit info.
type AdminUser = "admin";
// SolarX employees who have permission to edit project's data. Useful for contact support.
type ModeratorUser = "moderator";
// Backend developers who can some critical information and edit user's permissions.
type SuperUser = "superUser";

export type UserRole =
  | DefaultUser
  | BetaUser
  | AdminUser
  | ModeratorUser
  | SuperUser;

export interface User {
  avatar?: string;
  displayName?: string;
  email?: string;
  uid?: string;
  role?: UserRole;
}
