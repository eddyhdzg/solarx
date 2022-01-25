import { AppBar, Toolbar, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  paddingTop: "env(safe-area-inset-top)",
  zIndex: theme.zIndex.drawer - 1,
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(10),
  },
}));
export const BackButtonWrapper = styled("div")({
  marginLeft: "env(safe-area-inset-left)",
});

export const ActionsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginLeft: theme.spacing(1),
  marginRight: "env(safe-area-inset-right)",
}));
