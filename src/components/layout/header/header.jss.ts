import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header_appBar: {
      zIndex: theme.zIndex.drawer + 1,
      paddingTop: "env(safe-area-inset-top)", // notch
      ...theme.custom.glassBackground,
    },
    header_toolbar: {
      paddingLeft: 4,
      justifyContent: "space-between",
    },
    desktopAppbar_listItem: {
      justifyContent: "center",
      paddingTop: 16,
      paddingBottom: 16,
      maxWidth: 48,
      borderRadius: 4,
    },
    header_icon: {
      minWidth: "auto",
    },
    header_buttons: {
      display: "flex",
      alignItems: "center",
    },
    header_accountButton: {
      marginLeft: theme.spacing(1),
      marginRight: "env(safe-area-inset-right)",
    },
  })
);

export default useStyles;
