import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  BottomNavigationProps,
} from "@material-ui/core";
import { mergedRoutes } from "constant";
import { Routes } from "types";
import useStyles from "./mobileAppbar.jss";
import { useLocation, NavLink } from "react-router-dom";

const MobileAppbar: React.FC<BottomNavigationProps> = (props) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const handleChange = (_: React.ChangeEvent<{}>, newValue: Routes) => {};

  return (
    <BottomNavigation
      {...props}
      value={pathname}
      onChange={handleChange}
      className={classes.mobileAppbar_root}
    >
      {mergedRoutes.map(({ route, Icon }) => (
        <BottomNavigationAction
          key={route}
          component={NavLink}
          to={"/" + route}
          activeClassName="Mui-selected"
          label={route}
          icon={<Icon className={classes.mobileAppbar_icon} />}
          classes={{
            root: classes.mobileAppbar_button,
          }}
        />
      ))}
    </BottomNavigation>
  );
};

export default MobileAppbar;
