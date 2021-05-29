import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import ShowChartRoundedIcon from "@material-ui/icons/ShowChartRounded";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import { TBaseRoutes } from "types";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import Loader from "pages/[section]/[subSection]";
import Preferences from "pages/more/Preferences";

export type RoutesTree = {
  [key in TBaseRoutes]: {
    title: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    sections: {
      subHeader: string;
      subRoutes: {
        title: string;
        subRoute: string;
        component(): JSX.Element;
      }[];
    }[];
  };
};

export type RoutesTreeCopy = {
  [key in TBaseRoutes]: {
    sections: {
      subHeader: string;
      subRoutes: {
        title: string;
      }[];
    }[];
  };
};

export const routesTree: RoutesTree = {
  "/home": {
    title: "home",
    icon: HomeRoundedIcon,
    sections: [
      {
        subHeader: "Share Trading",
        subRoutes: [
          {
            title: "Buy",
            subRoute: "/buy",
            component: Loader,
          },
          {
            title: "Sell",
            subRoute: "/sell",
            component: Loader,
          },
          {
            title: "Crowdfunding",
            subRoute: "/crowdfunding",
            component: Loader,
          },
          {
            title: "Investment Funds",
            subRoute: "/investment-funds",
            component: Loader,
          },
          {
            title: "Bonds",
            subRoute: "/bonds",
            component: Loader,
          },
        ],
      },
    ],
  },
  "/portfolio": {
    title: "portfolio",
    icon: MenuBookRoundedIcon,
    sections: [
      {
        subHeader: "Category A",
        subRoutes: [
          {
            title: "Link A 1",
            subRoute: "/link-a-1",
            component: Loader,
          },
        ],
      },
      {
        subHeader: "Category B",
        subRoutes: [
          {
            title: "Link B 1",
            subRoute: "/link-b-1",
            component: Loader,
          },
          {
            title: "Link B 2",
            subRoute: "/link-b-2",
            component: Loader,
          },
        ],
      },
    ],
  },
  "/trading": {
    title: "trading",
    icon: ShowChartRoundedIcon,
    sections: [
      {
        subHeader: "Category C",
        subRoutes: [
          {
            title: "Link C 1",
            subRoute: "/link-c-1",
            component: Loader,
          },
        ],
      },
      {
        subHeader: "Category D",
        subRoutes: [
          {
            title: "Link D 1",
            subRoute: "/link-d-1",
            component: Loader,
          },
        ],
      },
    ],
  },
  "/projects": {
    title: "projects",
    icon: BusinessRoundedIcon,
    sections: [
      {
        subHeader: "Category e",
        subRoutes: [
          {
            title: "Link E 1",
            subRoute: "/link-e-1",
            component: Loader,
          },
          {
            title: "Link E 2",
            subRoute: "/link-e-2",
            component: Loader,
          },
        ],
      },
    ],
  },
  "/more": {
    title: "more",
    icon: MoreHorizRoundedIcon,
    sections: [
      {
        subHeader: "Account",
        subRoutes: [
          {
            title: "Preferences",
            subRoute: "/preferences",
            component: Preferences,
          },
        ],
      },
    ],
  },
};
