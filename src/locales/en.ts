import { Routes } from "types";

const en: {
  routes: {
    [key in Routes | string]: {
      title: string;
    };
  };
} = {
  routes: {
    "/home": {
      title: "home",
    },
    "/home/buy": {
      title: "buy",
    },
    "/portfolio": {
      title: "portfolio",
    },
    "/trading": {
      title: "trading",
    },
    "/projects": {
      title: "projects",
    },
    "/more": {
      title: "more",
    },
  },
};

export default en;
