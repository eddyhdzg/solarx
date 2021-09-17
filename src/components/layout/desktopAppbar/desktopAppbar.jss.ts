import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    desktopAppbar_root: {
      backgroundColor: theme.palette.grey[900],
      borderColor: "transparent",
      boxShadow: theme.shadows[3],
    },
    desktopAppbar_content: {
      display: "flex",
      flexDirection: "column",
      flex: "auto",
      justifyContent: "space-between",
      width: `calc(56px + env(safe-area-inset-left))`,
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
      paddingTop: "env(safe-area-inset-top)",
      paddingBottom: "env(safe-area-inset-bottom)",
      overflowY: "auto",
      msOverflowStyle: "none",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    desktopAppbar_icon: {
      minWidth: "auto",
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
