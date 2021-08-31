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
import { useSigninCheck } from "reactfire";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import useStyles from "./accountButton.jss";
import { useCustomAuth } from "hooks";
import SignInWithGoogle from "../signInWithGoogle/SignInWithGoogle";

const AccountButton: React.FC = () => {
  const classes = useStyles();
  const { signOut } = useCustomAuth();
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

  const handleSignOut = () => {
    signOut().finally(() => {
      setOpen(false);
    });
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
      anchorRef?.current?.focus();
    }

    prevOpen.current = open;
  }, [open, anchorRef]);

  return (
    <div>
      {!signinResult?.signedIn && <SignInWithGoogle />}

      <IconButton
        aria-label="account of current user"
        aria-haspopup="true"
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        onClick={handleToggle}
        className={[
          classes.accountButton_iconButton,
          !signinResult?.signedIn && classes.accountButton_hide,
        ].join(" ")}
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
        className={
          !signinResult?.signedIn ? classes.accountButton_hide : undefined
        }
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
                  <MenuItem onClick={handleSignOut}>
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
