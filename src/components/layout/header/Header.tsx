import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { AccountButton } from "components";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import useStyles from "./header.jss";
import shallow from "zustand/shallow";
import { useStore } from "hooks";
import { Link } from "react-router-dom";
import HideOnScroll from "../hideOnScroll/HideOnScroll";

const Header: React.FC = () => {
  const classes = useStyles();
  const { backButton } = useStore(
    ({ backButton }) => ({ backButton }),
    shallow
  );

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        className={classes.header_appBar}
        color="default"
      >
        <Toolbar className={classes.header_toolbar}>
          <div className={classes.header_backButton}>
            <div>
              {backButton.text && backButton.url && (
                <Button
                  startIcon={<ArrowBackRoundedIcon />}
                  component={Link}
                  to={backButton.url}
                  color="primary"
                >
                  {backButton.text}
                </Button>
              )}
            </div>
          </div>
          <div className={classes.header_actions}>
            <div className={classes.header_accountButton}>
              <AccountButton />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
