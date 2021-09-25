import { useState } from "react";
import {
  Avatar,
  Menu,
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
        <Tooltip title={t("auth.myAccount")}>
          <IconButton onClick={handleClick}>
            <Avatar
              alt="avatar"
              src={signinResult?.user?.photoURL || undefined}
            />
          </IconButton>
        </Tooltip>
      ) : (
        <SignInWithGoogle />
      )}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            minWidth: 200,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          {t("pages.more.accountInformation.myProfile")}
        </MenuItem>
        <MenuItem>
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
