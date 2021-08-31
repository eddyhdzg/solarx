import { Locales, ThemeType, UserRole } from "types";

export * from "./projects.constant";
export * from "./mexicanCities.constant";
export * from "./mexicanStates.constant";
export const themeOptions: ThemeType[] = ["light", "dark", "system"];
export const localeOptions: Locales[] = ["en", "es"];

export const betaArray = new Set([
  "beta",
  "admin",
  "moderator",
  "superUser",
]) as Set<UserRole>;

export const adminArray = new Set([
  "admin",
  "moderator",
  "superUser",
]) as Set<UserRole>;

export const moderatorArray = new Set([
  "moderator",
  "superUser",
]) as Set<UserRole>;

export const superUserArray = new Set(["superUser"]) as Set<UserRole>;
