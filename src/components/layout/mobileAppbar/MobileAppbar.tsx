import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { TBaseRoutes } from "types";
import useStyles from "./mobileAppbar.jss";
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
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <AppBar
      position="fixed"
      className={classes.mobileAppbar_root}
      color="transparent"
    >
      <BottomNavigation
        value={pathname}
        className={classes.mobileAppbar_bottomNavigation}
      >
        {Object.entries(routerTree).map(([route, { icon: Icon }]) => (
          <BottomNavigationAction
            key={route}
            component={NavLink}
            to={getMemoryRoute(route as TBaseRoutes)}
            activeClassName="Mui-selected"
            label={route}
            icon={<Icon className={classes.mobileAppbar_icon} />}
            classes={{
              root: classes.mobileAppbar_button,
            }}
          />
        ))}
      </BottomNavigation>
    </AppBar>
  );
};

export default MobileAppbar;
