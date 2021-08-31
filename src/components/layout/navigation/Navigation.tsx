import { useLocation } from "react-router-dom";
import { useRouterMemo, useRouterTree } from "hooks";
import { TBaseRoutes } from "types";
import shallow from "zustand/shallow";
import { useTheme, useMediaQuery } from "@material-ui/core";
import { DesktopAppbar, MobileAppbar } from "components";
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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return isMobile ? (
    <MobileAppbar routerTree={routerTree} getMemoryRoute={getMemoryRoute} />
  ) : (
    <DesktopAppbar routerTree={routerTree} getMemoryRoute={getMemoryRoute} />
  );
};

export default function Navigation() {
  const { routerTree } = useRouterTree();
  return <NavigationHelper routerTree={routerTree} />;
}
