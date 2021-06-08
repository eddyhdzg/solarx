import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { drawerWidth } from "constant";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layout: {
      display: "flex",
      height: "100vh",
    },
    layout_main: {
      position: "relative",
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
      marginTop: theme.spacing(7),
      [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
        marginTop: theme.spacing(6),
      },
      [theme.breakpoints.up("md")]: {
        marginTop: theme.spacing(8),
      },
    },
    layout_main__shift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
);

export default useStyles;
