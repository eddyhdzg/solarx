import {
  styled,
  drawerClasses,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemButtonProps,
} from "@mui/material";
import { NavLink, NavLinkProps } from "react-router-dom";

export const DesktopAppbarDrawer = styled(Drawer)(({ theme }) => ({
  [`& .${drawerClasses.paper}`]: {
    borderColor: "transparent",
    backgroundColor: theme.palette.grey[900],
    boxShadow: theme.shadows[3],
  },
}));

export const DesktopAppbarContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: "auto",
  justifyContent: "space-between",
  width: `calc(56px + env(safe-area-inset-left))`,
  paddingTop: "env(safe-area-inset-top)",
  paddingBottom: "env(safe-area-inset-bottom)",
  paddingLeft: theme.spacing(0.5),
  paddingRight: theme.spacing(0.5),
  overflowY: "auto",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

export const DesktopAppbarUl = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export const DesktopAppbarLi = styled(
  (
    props: ListItemButtonProps & {
      component: typeof NavLink;
      to: NavLinkProps["to"];
      activeClassName?: NavLinkProps["activeClassName"];
    }
  ) => <ListItemButton {...props} />
)(({ theme }) => ({
  justifyContent: "center",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  [`&.Mui-selected .MuiListItemIcon-root`]: {
    color: theme.palette.primary.main,
  },
  "&:first-of-type": {
    marginTop: 0,
  },
  "&:last-child": {
    marginBottom: 0,
  },
}));

export const DesktopAppbarLiIcon = styled(ListItemIcon)({
  minWidth: "auto",
});
