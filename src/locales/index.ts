import { Copywriting, Locales } from "types";
import en from "./en";
import es from "./es";

export const locales: { [key in Locales | string]: Copywriting } = {
  en: en,
  es: es,
};
