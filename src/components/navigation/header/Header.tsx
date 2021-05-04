import React from "react";
import { AppBar, Divider, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import useStyles from "./header.jss";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

interface IHeaderProps {
  open: boolean;
  toggleDrawer: React.MouseEventHandler<HTMLButtonElement>;
}

const Header: React.FC<IHeaderProps> = ({ open, toggleDrawer }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.header_appBar, {
          [classes.header_appBar__open]: open,
        })}
      >
        <Toolbar className={classes.header_toolbar}>
          <IconButton
            color="default"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            className={classes.header_menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Breadcrumbs />
        </Toolbar>
        <Divider />
      </AppBar>
    </>
  );
};

export default Header;
