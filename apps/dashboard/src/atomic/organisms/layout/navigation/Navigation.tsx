import { useLocation } from "react-router-dom";
import { useRouterMemo, useRouterTree, useBreakpoint } from "hooks";
import { TBaseRoutes } from "solarx-types";
import shallow from "zustand/shallow";
import { MobileAppBar, DesktopAppBar } from "atomic";
import { RouterTree } from "hooks/router/useRouterTree";

export default function Navigation() {
  const { routerTree } = useRouterTree();
  return <NavigationHelper routerTree={routerTree} />;
}

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
  const md = useBreakpoint("md");

  return md ? (
    <DesktopAppBar routerTree={routerTree} getMemoryRoute={getMemoryRoute} />
  ) : (
    <MobileAppBar routerTree={routerTree} getMemoryRoute={getMemoryRoute} />
  );
};
