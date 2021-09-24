import { Locales, ThemeType, UserRole } from "types";

export * from "./projects.constant";
export * from "./mexicanCities.constant";
export * from "./mexicanStates.constant";
export const themeOptions: ThemeType[] = ["light", "dark", "system"];
export const localeOptions: Locales[] = ["en", "es"];

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
