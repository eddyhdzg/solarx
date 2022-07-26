import { useState } from "react";
import { useSigninCheck } from "reactfire";
import { useCustomAuth } from "hooks";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SignInWithGoogle } from "components";
import {
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Tooltip,
  menuClasses,
} from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function AccountButton() {
  const { t } = useTranslation();
  const { signOut } = useCustomAuth();
  const { data: signinResult } = useSigninCheck();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleSignOut = () => {
    signOut();
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {signinResult?.signedIn ? (
        <Tooltip
          title={t("auth.myAccount")}
          children={
            <IconButton onClick={handleClick}>
              <Avatar
                alt="avatar"
                src={signinResult?.user?.photoURL || undefined}
              />
            </IconButton>
          }
        />
      ) : (
        <SignInWithGoogle />
      )}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        sx={(theme) => ({
          [`& .${menuClasses.paper}`]: {
            mt: 1.5,
            minWidth: theme.spacing(25),
          },
        })}
      >
        <MenuItem component={Link} to="/more/profile">
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          {t("pages.more.profile.profile")}
        </MenuItem>
        <MenuItem component={Link} to="/more/preferences">
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          {t("pages.more.preferences.preferences")}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleSignOut}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          {t("auth.signOut")}
        </MenuItem>
      </Menu>
    </>
  );
}
