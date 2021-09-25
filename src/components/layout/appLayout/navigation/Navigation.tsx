import { useLocation } from "react-router-dom";
import { useRouterMemo, useRouterTree } from "hooks";
import { TBaseRoutes } from "types";
import shallow from "zustand/shallow";
import { useTheme, useMediaQuery } from "@mui/material";
import DesktopAppbar from "./desktopAppbar/DesktopAppbar";
import MobileAppbar from "./mobileAppbar/MobileAppbar";
import { RouterTree } from "hooks/router/useRouterTree";

interface INavigationHelperProps {
  routerTree: RouterTree;
}

const NavigationHelper = ({ routerTree }: INavigationHelperProps) => {
  const { pathname } = useLocation();
  const { routerMemo } = useRouterMemo(
    ({ routerMemo }) => ({ routerMemo }),
    shallow
  );
  const getMemoryRoute = (baseRoute: TBaseRoutes) => {
    if (pathname.includes(baseRoute)) {
      return pathname.substring(0, pathname.lastIndexOf("/")) || baseRoute;
    }
    return routerMemo[baseRoute];
  };
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));

  return isTablet ? (
    <DesktopAppbar routerTree={routerTree} getMemoryRoute={getMemoryRoute} />
  ) : (
    <MobileAppbar routerTree={routerTree} getMemoryRoute={getMemoryRoute} />
  );
};

export default function Navigation() {
  const { routerTree } = useRouterTree();
  return <NavigationHelper routerTree={routerTree} />;
}
