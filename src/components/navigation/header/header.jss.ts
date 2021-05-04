import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { drawerWidth } from "constant";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header_appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      boxShadow: "none",
      backgroundColor: theme.palette.background.default,
      paddingTop: "env(safe-area-inset-top)",
    },
    header_appBar__open: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    header_toolbar: {
      backgroundColor: theme.palette.background.default,
    },
    header_menuButton: {
      marginRight: theme.spacing(2),
      marginLeft: "env(safe-area-inset-left)",
    },
  })
);

export default useStyles;