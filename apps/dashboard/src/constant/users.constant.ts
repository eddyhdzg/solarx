import { UserRole } from "solarx-types";

export const betaArray = new Set([
  "BETA",
  "ADMIN",
  "MODERATOR",
  "SUPER_USER",
]) as Set<UserRole>;

export const adminArray = new Set([
  "ADMIN",
  "MODERATOR",
  "SUPER_USER",
]) as Set<UserRole>;

export const moderatorArray = new Set([
  "MODERATOR",
  "SUPER_USER",
]) as Set<UserRole>;

export const superUserArray = new Set(["SUPER_USER"]) as Set<UserRole>;
