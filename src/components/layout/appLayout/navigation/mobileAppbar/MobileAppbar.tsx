import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { TBaseRoutes } from "types";
import { NavLink } from "react-router-dom";
import { RouterTree } from "hooks/router/useRouterTree";

interface IMobileAppbarProps {
  routerTree: RouterTree;
  getMemoryRoute: (baseRoute: TBaseRoutes) => string;
}

const MobileAppbar: React.FC<IMobileAppbarProps> = ({
  routerTree,
  getMemoryRoute,
}) => {
  const { pathname } = useLocation();

  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        top: "auto",
        bottom: 0,
        width: "100%",
        backgroundColor: (theme) =>
          theme.custom.glassBackground.backgroundColor,
        backdropFilter: (theme) => theme.custom.glassBackground.backdropFilter,
      }}
    >
      <BottomNavigation
        value={pathname}
        sx={{
          borderTopWidth: 1,
          borderTopStyle: "solid",
          borderTopColor: (theme) => theme.palette.divider,
          width: "100%",
          height: "calc(56px + env(safe-area-inset-bottom))",
          backgroundColor: "transparent",
          '& [class*="-label"]': {
            display: "none",
          },
        }}
      >
        {Object.entries(routerTree).map(([route, { icon: Icon }]) => (
          <BottomNavigationAction
            key={route}
            component={NavLink}
            to={getMemoryRoute(route as TBaseRoutes)}
            activeClassName="Mui-selected"
            label={route}
            icon={
              <Icon
                sx={{
                  fontSize: {
                    xxs: "1.25rem",
                    xs: "1.5rem",
                  },
                }}
              />
            }
            sx={{
              pb: "calc(8px + env(safe-area-inset-bottom))",
            }}
          />
        ))}
      </BottomNavigation>
    </AppBar>
  );
};

export default MobileAppbar;
