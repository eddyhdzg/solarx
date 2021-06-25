import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import ShowChartRoundedIcon from "@material-ui/icons/ShowChartRounded";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import { TBaseRoutes } from "types";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import Loader from "pages/loader";
import Preferences from "pages/more/preferences/Preferences";
import { ProjectsRoute } from "pages/pages";

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
        isPrivate?: boolean;
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
        subHeader: "category A",
        subRoutes: [
          {
            title: "link a 1",
            subRoute: "/link-a-1",
            component: Loader,
          },
        ],
      },
      {
        subHeader: "category B",
        subRoutes: [
          {
            title: "link b 1",
            subRoute: "/link-b-1",
            component: Loader,
          },
          {
            title: "link b 2",
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
        subHeader: "Share Trading",
        subRoutes: [
          {
            title: "buy",
            subRoute: "/buy",
            component: Loader,
          },
          {
            title: "sell",
            subRoute: "/sell",
            component: Loader,
          },
          {
            title: "crowdfunding",
            subRoute: "/crowdfunding",
            component: Loader,
          },
          {
            title: "investment funds",
            subRoute: "/investment-funds",
            component: Loader,
          },
          {
            title: "bonds",
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
        subHeader: "category C",
        subRoutes: [
          {
            title: "link c 1",
            subRoute: "/link-c-1",
            component: Loader,
          },
        ],
      },
      {
        subHeader: "category D",
        subRoutes: [
          {
            title: "link d 1",
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
        subHeader: "category E",
        subRoutes: [
          {
            title: "link e 1",
            subRoute: "/link-e-1",
            component: ProjectsRoute,
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
        subHeader: "account",
        subRoutes: [
          {
            title: "preferences",
            subRoute: "/preferences",
            component: Preferences,
          },
        ],
      },
    ],
  },
};
