import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import AdminPanelSettingsOutlinedIcon from "@material-ui/icons/AdminPanelSettingsOutlined";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import { TBaseRoutes } from "types";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import Loader from "pages/loader";
import Preferences from "pages/more/preferences/Preferences";
import { CrowdfundingRoute, AdminRoute } from "pages/pages";

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
  "/crowdfunding": {
    title: "crowdfunding",
    icon: BusinessRoundedIcon,
    sections: [
      {
        subHeader: "projects",
        subRoutes: [
          {
            title: "projects",
            subRoute: "/projects",
            component: CrowdfundingRoute,
          },
        ],
      },
    ],
  },
  "/admin": {
    title: "admin",
    icon: AdminPanelSettingsOutlinedIcon,
    sections: [
      {
        subHeader: "projects",
        subRoutes: [
          {
            title: "manage projects",
            subRoute: "/projects",
            component: AdminRoute,
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
