import { Routes } from "types";

const es: {
  routes: {
    [key in Routes]: {
      title: string;
    };
  };
} = {
  routes: {
    home: {
      title: "inicio",
    },
    portfolio: {
      title: "portafolio",
    },
    trading: {
      title: "trading",
    },
    projects: {
      title: "proyectos",
    },
    more: {
      title: "más",
    },
  },
};

export default es;
