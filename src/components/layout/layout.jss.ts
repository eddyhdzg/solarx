import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { drawerWidth } from "constant";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layout: {
      display: "flex",
    },
    layout_toolbar: {
      ...theme.mixins.toolbar,
    },
    layout_main: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
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
