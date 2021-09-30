import {
  AppBar,
  BottomNavigation,
  styled,
  BottomNavigationAction,
} from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  top: "auto",
  bottom: 0,
  width: "100%",
  backgroundColor: theme.custom.glassBackground.backgroundColor,
  backdropFilter: theme.custom.glassBackground.backdropFilter,
}));

export const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  borderTopWidth: 1,
  borderTopStyle: "solid",
  borderTopColor: theme.palette.divider,
  width: "100%",
  height: "calc(56px + env(safe-area-inset-bottom))",
  backgroundColor: "transparent",
  '& [class*="-label"]': {
    display: "none",
  },
}));

export const StyledBottomNavigationAction: any = styled(BottomNavigationAction)(
  {
    paddingBottom: "calc(8px + env(safe-area-inset-bottom))",
  }
);
