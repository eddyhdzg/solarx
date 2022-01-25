import en from "./en.json";

// react-i18next versions higher than 11.11.0
declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof en;
    resources: typeof en;
  }
}
