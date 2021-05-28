import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  BottomNavigationProps,
} from "@material-ui/core";
import { mergedRoutes } from "constant";
import { TBaseRoutes } from "types";
import useStyles from "./mobileAppbar.jss";
import { useLocation, NavLink } from "react-router-dom";
import { useStore } from "providers";
import shallow from "zustand/shallow";

const MobileAppbar: React.FC<BottomNavigationProps> = (props) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { routerMemo } = useStore(
    ({ routerMemo }) => ({ routerMemo }),
    shallow
  );

  const getMemoryRoute = (baseRoute: TBaseRoutes) => {
    if (pathname.includes(baseRoute)) {
      return pathname.substring(0, pathname.lastIndexOf("/")) || baseRoute;
    }
    return routerMemo[baseRoute];
  };

  return (
    <AppBar position="fixed" className={classes.mobileAppbar_root}>
      <BottomNavigation
        {...props}
        value={pathname}
        className={classes.mobileAppbar_bottomNavigation}
      >
        {mergedRoutes.map(({ route, Icon }) => (
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
