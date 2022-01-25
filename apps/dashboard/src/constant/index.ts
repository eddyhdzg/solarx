import { Timespan } from "solarx-types";
export * from "./mexicanCities.constant";
export * from "./mexicanStates.constant";
export * from "./others.constant";
export * from "./projects.constant";
export * from "./users.constant";

const oneMonthSeconds = 2678400000;
const threeMonthSeconds = 8000000000;
const oneYearSeconds = 31062204000;

export const secondsHash: {
  [key in Timespan]: number;
} = {
  "1M": oneMonthSeconds,
  "3M": threeMonthSeconds,
  "1Y": oneYearSeconds,
  H: Infinity,
};
