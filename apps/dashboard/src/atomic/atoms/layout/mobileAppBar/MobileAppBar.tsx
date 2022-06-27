import { useLocation } from "react-router-dom";
import { TBaseRoutes } from "solarx-types";
import { NavLink } from "react-router-dom";
import { RouterTree } from "hooks/router/useRouterTree";
import {
  StyledAppBar,
  StyledBottomNavigation,
  StyledBottomNavigationAction,
} from "./MobileAppBar.styled";

interface IMobileAppBarProps {
  routerTree: RouterTree;
  getMemoryRoute: (baseRoute: TBaseRoutes) => string;
}

const MobileAppBar: React.FC<IMobileAppBarProps> = ({
  routerTree,
  getMemoryRoute,
}) => {
  const { pathname } = useLocation();

  return (
    <StyledAppBar position="fixed" color="transparent">
      <StyledBottomNavigation value={pathname}>
        {Object.entries(routerTree).map(([route, { icon: Icon }]) => (
          <StyledBottomNavigationAction
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
          />
        ))}
      </StyledBottomNavigation>
    </StyledAppBar>
  );
};

export default MobileAppBar;
