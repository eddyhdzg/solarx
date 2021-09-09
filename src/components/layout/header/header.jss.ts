import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header_appBar: {
      paddingTop: "env(safe-area-inset-top)", // notch
      zIndex: theme.zIndex.drawer - 1,
      ...theme.custom.glassBackground,
    },
    header_toolbar: {
      justifyContent: "space-between",
      [theme.breakpoints.up("md")]: {
        paddingLeft: theme.spacing(10),
      },
    },
    header_backButton: {
      marginLeft: "env(safe-area-inset-left)",
    },
    header_actions: {
      display: "flex",
    },
    header_accountButton: {
      marginLeft: theme.spacing(1),
      marginRight: "env(safe-area-inset-right)",
    },
  })
);

export default useStyles;
