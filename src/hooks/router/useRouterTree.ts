import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { useIsAdmin } from "hooks";
import { AdminRoute, CrowdfundingRoute, MoreRoute } from "router";
// import { LoaderPage } from "pages";
// Icons
// import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import AdminPanelSettingsOutlinedIcon from "@material-ui/icons/AdminPanelSettingsOutlined";
// import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import StoreMallDirectoryRounded from "@material-ui/icons/StoreMallDirectoryRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";

export type RouterTree = {
  [key: string]: {
    title: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    component(): JSX.Element;
  };
};

const useRouterTree = () => {
  const { isAdmin, status } = useIsAdmin();

  const routerTree: RouterTree = {
    // "/portfolio": {
    //   title: "portfolio",
    //   icon: MenuBookRoundedIcon,
    //   component: LoaderPage,
    // },
    "/crowdfunding": {
      title: "crowdfunding",
      icon: StoreMallDirectoryRounded,
      component: CrowdfundingRoute,
    },
    "/more": {
      title: "more",
      icon: MoreHorizRoundedIcon,
      component: MoreRoute,
    },
  };

  const adminRouterTree: RouterTree = {
    // "/portfolio": {
    //   title: "portfolio",
    //   icon: MenuBookRoundedIcon,
    //   component: LoaderPage,
    // },
    "/crowdfunding": {
      title: "crowdfunding",
      icon: StoreMallDirectoryRounded,
      component: CrowdfundingRoute,
    },
    "/admin": {
      title: "admin",
      icon: AdminPanelSettingsOutlinedIcon,
      component: AdminRoute,
    },
    "/more": {
      title: "more",
      icon: MoreHorizRoundedIcon,
      component: MoreRoute,
    },
  };

  return { routerTree: isAdmin ? adminRouterTree : routerTree, status };
};

export default useRouterTree;
