import { Locales, ThemeType, Timespan } from "solarx-types";

export const themeOptions: ThemeType[] = ["light", "dark", "system"];
export const localeOptions: Locales[] = ["en", "es"];

export const Notion_Regex = /^[a-zA-Z0-9_.-]*$/gi;

type TimeTexts = "1 month" | "3 month" | "1 year" | "historic";

export const timespans: {
  text: TimeTexts;
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
    text: "historic",
    value: "H",
  },
];
