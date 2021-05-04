import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import ShowChartRoundedIcon from "@material-ui/icons/ShowChartRounded";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import { Routes } from "types";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export const routesTree: {
  [key in Routes]: {
    subHeader: string;
    subRoutes: { title: string; route: string }[];
  }[];
} = {
  home: [
    {
      subHeader: "Share Trading",
      subRoutes: [
        {
          title: "Buy",
          route: "buy",
        },
        {
          title: "Sell",
          route: "sell",
        },
      ],
    },
    {
      subHeader: "Crowdfunding",
      subRoutes: [
        {
          title: "Crowdfunding",
          route: "crowdfunding",
        },
      ],
    },
    {
      subHeader: "Investing",
      subRoutes: [
        {
          title: "Investment funds",
          route: "investment-funds",
        },
        {
          title: "Bonds",
          route: "bonds",
        },
      ],
    },
  ],
  portfolio: [
    {
      subHeader: "Category A",
      subRoutes: [
        {
          title: "Link A 1",
          route: "link-a-1",
        },
      ],
    },
    {
      subHeader: "Category B",
      subRoutes: [
        {
          title: "Link B 1",
          route: "link-b-1",
        },
        {
          title: "Link B 2",
          route: "link-b-2",
        },
      ],
    },
  ],
  trading: [
    {
      subHeader: "Category C",
      subRoutes: [
        {
          title: "Link C 1",
          route: "link-c-1",
        },
      ],
    },
    {
      subHeader: "Category D",
      subRoutes: [
        {
          title: "Link D 1",
          route: "link-d-1",
        },
      ],
    },
  ],
  projects: [
    {
      subHeader: "Category e",
      subRoutes: [
        {
          title: "Link E 1",
          route: "link-e-1",
        },
        {
          title: "Link E 2",
          route: "link-e-2",
        },
      ],
    },
  ],
  more: [
    {
      subHeader: "Category f",
      subRoutes: [
        {
          title: "Link F 1",
          route: "link-f-1",
        },
      ],
    },
  ],
};

export type RoutesTree = typeof routesTree;

export const routes: {
  route: Routes;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}[] = [
  {
    route: "home",
    Icon: HomeRoundedIcon,
  },
  {
    route: "portfolio",
    Icon: MenuBookRoundedIcon,
  },
  {
    route: "trading",
    Icon: ShowChartRoundedIcon,
  },
  {
    route: "projects",
    Icon: BusinessRoundedIcon,
  },
];

export const more: { route: Routes; Icon: React.FC }[] = [
  {
    route: "more",
    Icon: MoreHorizRoundedIcon,
  },
];

export const mergedRoutes = [...routes, ...more];
