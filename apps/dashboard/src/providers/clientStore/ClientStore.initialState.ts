import { BackButton, Locales } from "solarx-types";

export type ClientState = {
  backButton: BackButton;
  locale: Locales;
  projects: {
    pageSize: number;
    projectType: "cards" | "table";
  };
  investors: {
    pageSize: number;
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
  investors: {
    pageSize: 10,
  },
};
