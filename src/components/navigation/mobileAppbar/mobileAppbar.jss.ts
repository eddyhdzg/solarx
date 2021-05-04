import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "types";

const useStyles = makeStyles((theme: Theme) => ({
  mobileAppbar_root: {
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
      minWidth: "64px",
    },
  },
}));

export default useStyles;
