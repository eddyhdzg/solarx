import { useState } from "react";
import {
  Avatar,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSigninCheck } from "reactfire";
import { useCustomAuth } from "hooks";
import { SignInWithGoogle } from "components";
import { useTranslation } from "react-i18next";
import { AccountButtonMenu } from "./AccountButton.styled";
import { Link } from "react-router-dom";

export default function AccountMenu() {
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
      <AccountButtonMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
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
      </AccountButtonMenu>
    </>
  );
}
