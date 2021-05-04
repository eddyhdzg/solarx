import React from "react";
import { Drawer, DrawerProps } from "@material-ui/core";
import useStyles from "./desktopAppbar.jss";
import Sidenav from "../sidenav/Sidenav";
import SubSidenav from "../subSidenav/SubSidenav";
import { Routes } from "types";

export interface IDesktopAppbarProps extends DrawerProps {
  value: Routes;
  handleListItemClick: (
    _: React.MouseEvent<HTMLDivElement, MouseEvent>,
    newValue: Routes
  ) => void;
}

const DesktopAppbar: React.FC<IDesktopAppbarProps> = ({
  value,
  handleListItemClick,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Drawer
      {...props}
      className={classes.desktopAppbar_drawer}
      variant="persistent"
      classes={{
        paper: classes.desktopAppbar_drawerPaper,
      }}
      anchor="left"
    >
      <Sidenav />
      <SubSidenav />
    </Drawer>
  );
};

export default DesktopAppbar;
