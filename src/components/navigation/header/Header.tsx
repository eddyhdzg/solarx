import React from "react";
import { AppBar, Badge, Divider, IconButton, Toolbar } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import clsx from "clsx";
import useStyles from "./header.jss";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import RefreshIcon from "@material-ui/icons/Refresh";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

interface IHeaderProps {
  open: boolean;
  toggleDrawer: React.MouseEventHandler<HTMLButtonElement>;
}

const Header: React.FC<IHeaderProps> = ({ open, toggleDrawer }) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.header_appBar, {
        [classes.header_appBar__open]: open,
      })}
    >
      <Toolbar className={classes.header_toolbar}>
        <div className={classes.header_buttons}>
          <IconButton
            aria-label="open drawer"
            onClick={toggleDrawer}
            className={classes.header_menuButton}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Breadcrumbs />
        </div>
        <div className={classes.header_buttons}>
          <IconButton aria-label="refresh" aria-controls="refresh-button">
            <RefreshIcon />
          </IconButton>
          <IconButton aria-label="show n new notifications">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            aria-label="account of current user"
            aria-haspopup="true"
            className={classes.header_accountButton}
          >
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

export default Header;
