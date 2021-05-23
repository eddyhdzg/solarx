import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import ShowChartRoundedIcon from "@material-ui/icons/ShowChartRounded";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import { TBaseRoutes, IRoutesPathsTree } from "types";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export const routesTree: {
  [key: string]: {
    subHeader: string;
    subRoutes: { title: string; subRoute: string }[];
  }[];
} = {
  "/home": [
    {
      subHeader: "Share Trading",
      subRoutes: [
        {
          title: "Buy",
          subRoute: "/buy",
        },
        {
          title: "Sell",
          subRoute: "/sell",
        },
      ],
    },
    {
      subHeader: "Crowdfunding",
      subRoutes: [
        {
          title: "Crowdfunding",
          subRoute: "/crowdfunding",
        },
      ],
    },
    {
      subHeader: "Investing",
      subRoutes: [
        {
          title: "Investment funds",
          subRoute: "/investment-funds",
        },
        {
          title: "Bonds",
          subRoute: "/bonds",
        },
      ],
    },
  ],
  "/portfolio": [
    {
      subHeader: "Category A",
      subRoutes: [
        {
          title: "Link A 1",
          subRoute: "/link-a-1",
        },
      ],
    },
    {
      subHeader: "Category B",
      subRoutes: [
        {
          title: "Link B 1",
          subRoute: "/link-b-1",
        },
        {
          title: "Link B 2",
          subRoute: "/link-b-2",
        },
      ],
    },
  ],
  "/trading": [
    {
      subHeader: "Category C",
      subRoutes: [
        {
          title: "Link C 1",
          subRoute: "/link-c-1",
        },
      ],
    },
    {
      subHeader: "Category D",
      subRoutes: [
        {
          title: "Link D 1",
          subRoute: "/link-d-1",
        },
      ],
    },
  ],
  "/projects": [
    {
      subHeader: "Category e",
      subRoutes: [
        {
          title: "Link E 1",
          subRoute: "/link-e-1",
        },
        {
          title: "Link E 2",
          subRoute: "/link-e-2",
        },
      ],
    },
  ],
  "/more": [
    {
      subHeader: "Category f",
      subRoutes: [
        {
          title: "Link F 1",
          subRoute: "/link-f-1",
        },
      ],
    },
  ],
};

export type RoutesTree = typeof routesTree;

export const routes: {
  route: TBaseRoutes;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}[] = [
  {
    route: "/home",
    Icon: HomeRoundedIcon,
  },
  {
    route: "/portfolio",
    Icon: MenuBookRoundedIcon,
  },
  {
    route: "/trading",
    Icon: ShowChartRoundedIcon,
  },
  {
    route: "/projects",
    Icon: BusinessRoundedIcon,
  },
];

export const more: { route: TBaseRoutes; Icon: React.FC }[] = [
  {
    route: "/more",
    Icon: MoreHorizRoundedIcon,
  },
];

export const mergedRoutes = [...routes, ...more];

export const routesPathsTree: IRoutesPathsTree[] = [
  {
    path: "/home",
    subRoutes: [
      {
        subPath: "/buy",
      },
      {
        subPath: "/sell",
      },
      {
        subPath: "/crowdfunding",
      },
      {
        subPath: "/investment-funds",
      },
      {
        subPath: "/bonds",
      },
    ],
  },
  {
    path: "/portfolio",
    subRoutes: [
      {
        subPath: "/link-a-1",
      },
      {
        subPath: "/link-b-1",
      },
      {
        subPath: "/link-b-2",
      },
    ],
  },
  {
    path: "/trading",
    subRoutes: [
      {
        subPath: "/link-c-1",
      },
      {
        subPath: "/link-d-1",
      },
    ],
  },
  {
    path: "/projects",
    subRoutes: [
      {
        subPath: "/link-e-1",
      },
      {
        subPath: "/link-e-2",
      },
    ],
  },
  {
    path: "/more",
    subRoutes: [
      {
        subPath: "/link-f-1",
      },
    ],
  },
];
