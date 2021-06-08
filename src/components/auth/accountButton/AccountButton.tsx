import { useState, useEffect, useRef } from "react";
import {
  Avatar,
  IconButton,
  MenuList,
  MenuItem,
  Popper,
  Paper,
  Grow,
  ClickAwayListener,
} from "@material-ui/core";
import { useSigninCheck, useAuth } from "reactfire";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import useStyles from "./accountButton.jss";

const AccountButton: React.FC = () => {
  const classes = useStyles();
  const auth = useAuth();
  const { data: signinResult } = useSigninCheck();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleLogOut = () => {
    auth.signOut();
    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-haspopup="true"
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        onClick={handleToggle}
        className={classes.accountButton_iconButton}
      >
        <Avatar
          alt="google avatar"
          src={signinResult?.user?.photoURL || undefined}
        />
      </IconButton>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={() => handleLogOut()}>
                    <ExitToAppRoundedIcon
                      className={classes.accountButton_icon}
                    />
                    Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default AccountButton;
