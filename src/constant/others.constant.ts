import { Locales, ThemeType, Timespan } from "types";

export const themeOptions: ThemeType[] = ["light", "dark", "system"];
export const localeOptions: Locales[] = ["en", "es"];

export const Notion_Regex = /^[a-zA-Z0-9_.-]*$/gi;

export const timespans: {
  text: string;
  value: Timespan;
}[] = [
  {
    text: "1 month",
    value: "1M",
  },
  {
    text: "3 month",
    value: "3M",
  },
  {
    text: "1 year",
    value: "1Y",
  },
  {
    text: "Historic",
    value: "H",
  },
];
