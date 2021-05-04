import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  BottomNavigationProps,
} from "@material-ui/core";
import { mergedRoutes } from "constant";
import { Routes } from "types";
import useStyles from "./mobileAppbar.jss";
// import { useRouter } from "next/router";

const MobileAppbar: React.FC<BottomNavigationProps> = (props) => {
  const classes = useStyles();
  // const { query, push } = useRouter();
  // const { section } = query;

  const handleChange = (_: React.ChangeEvent<{}>, newValue: Routes) => {
    // push({
    //   pathname: "/[section]",
    //   query: { section: newValue },
    // });
  };

  return (
    <BottomNavigation
      {...props}
      // value={section}
      value={"section"}
      onChange={handleChange}
      className={classes.mobileAppbar_root}
    >
      {mergedRoutes.map(({ route, Icon }) => (
        <BottomNavigationAction
          key={route}
          value={route}
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
