import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  mobileAppbar_root: {
    top: "auto",
    bottom: 0,
    width: "100%",
  },
  mobileAppbar_bottomNavigation: {
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: theme.palette.divider,
    '& [class*="-label"]': {
      display: "none",
    },
    width: "100%",
    height: "calc(56px + env(safe-area-inset-bottom))",
  },
  mobileAppbar_icon: {
    [theme.breakpoints.only("xxs")]: {
      fontSize: "1rem",
    },
  },
  mobileAppbar_button: {
    paddingBottom: "calc(8px + env(safe-area-inset-bottom))",
    [theme.breakpoints.only("xxs")]: {
      minWidth: theme.spacing(8),
    },
  },
}));

export default useStyles;
