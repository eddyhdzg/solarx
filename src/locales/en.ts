import { Routes } from "types";

const en: {
  routes: {
    [key in Routes]: {
      title: string;
    };
  };
} = {
  routes: {
    home: {
      title: "home",
    },
    portfolio: {
      title: "portfolio",
    },
    trading: {
      title: "trading",
    },
    projects: {
      title: "projects",
    },
    more: {
      title: "more",
    },
  },
};

export default en;
