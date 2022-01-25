import { styled } from "@mui/material";

export const StyledLayout = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(7),
  },
}));

export const Notch = styled("div")(({ theme }) => ({
  minHeight: "env(safe-area-inset-top)",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: theme.zIndex.drawer,
  backgroundColor: theme.palette.grey[900],
}));

export const Main = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(3),
  },
}));

export const Toolbar = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  ...theme.mixins.toolbar,
}));

export const Offset = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  [theme.breakpoints.up("sm")]: {
    minHeight: "unset",
  },
}));
