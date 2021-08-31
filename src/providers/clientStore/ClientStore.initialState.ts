import { BackButton, Locales } from "types";

export type ClientState = {
  backButton: BackButton;
  locale: Locales;
  projects: {
    pageSize: number;
    projectType: "cards" | "table";
  };
};

export const initialClientState: ClientState = {
  backButton: {
    text: undefined,
    url: undefined,
  },
  locale: "en",
  projects: {
    pageSize: 10,
    projectType: "cards",
  },
};
