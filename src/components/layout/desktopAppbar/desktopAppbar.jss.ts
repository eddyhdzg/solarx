import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    desktopAppbar_root: {
      backgroundColor: theme.palette.grey[900],
    },
    desktopAppbar_content: {
      display: "flex",
      flexDirection: "column",
      flex: "auto",
      justifyContent: "space-between",
      width: `calc(56px + env(safe-area-inset-left))`,
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
      paddingBottom: "env(safe-area-inset-bottom)",
      overflowY: "scroll",
    },
    desktopAppbar_icon: {
      minWidth: "auto",
    },
    desktopAppbar_toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    desktopAppbar_ul: {
      "&> *": {
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
        "&:first-child": {
          marginTop: 0,
        },
        "&:last-child": {
          marginBottom: 0,
        },
      },
    },
    desktopAppbar_listItem: {
      justifyContent: "center",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      borderRadius: theme.spacing(0.5),
    },
  })
);

export default useStyles;
