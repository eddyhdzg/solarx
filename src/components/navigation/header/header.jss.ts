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
      justifyContent: "space-between",
    },
    header_buttons: {
      display: "flex",
      alignItems: "center",
    },
    header_menuButton: {
      marginRight: theme.spacing(2),
      marginLeft: "env(safe-area-inset-left)",
    },
    header_notificationButton: {
      marginLeft: theme.spacing(1),
    },
    header_accountButton: {
      marginLeft: theme.spacing(2),
      marginRight: "env(safe-area-inset-right)",
    },
  })
);

export default useStyles;
