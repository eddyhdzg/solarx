import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import es from "./es.json";
import LanguageDetector from "i18next-browser-languagedetector";

export const resources = {
  en,
  es,
};

const CapitalizeFirstLetter = (str: string) => {
  return str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};

const options = {
  order: ["localStorage", "navigator"],
  caches: ["localStorage"],
};

i18n
  .use(LanguageDetector)
  .use({
    type: "postProcessor",
    name: "capitalize",
    process: function (value: string) {
      return CapitalizeFirstLetter(value);
    },
  })
  .use(initReactI18next)
  .init({
    detection: options,
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    interpolation: {
      escapeValue: false,
    },
    debug: false,
    postProcess: ["capitalize"],
  });

export default i18n;
