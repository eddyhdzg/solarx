import {
  CrowdfundingRoute,
  AdminRoute,
  AccountInformation,
  Loader,
  Preferences,
} from "pages";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { useIsAdmin } from "hooks";
// Icons
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import AdminPanelSettingsOutlinedIcon from "@material-ui/icons/AdminPanelSettingsOutlined";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";

export type RoutesTree = {
  [key: string]: {
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

const useRouterTree = () => {
  const { isAdmin } = useIsAdmin();

  const routesTree: RoutesTree = {
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
    "/more": {
      title: "more",
      icon: MoreHorizRoundedIcon,
      sections: [
        {
          subHeader: "account",
          subRoutes: [
            {
              title: "account-information",
              subRoute: "/account-information",
              component: AccountInformation,
            },
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

  const adminRoutesTree: RoutesTree = {
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
            {
              title: "create project",
              subRoute: "/projects/create-project",
              component: AdminRoute,
            },
            {
              title: "users",
              subRoute: "/users",
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
              title: "account-information",
              subRoute: "/account-information",
              component: AccountInformation,
            },
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

  return isAdmin ? adminRoutesTree : routesTree;
};

export default useRouterTree;
