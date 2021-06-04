import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "types";

const useStyles = makeStyles(({ palette, mixins, spacing }: Theme) =>
  createStyles({
    sidenav_root: {
      display: "flex",
      flexDirection: "column",
      borderRightWidth: 1,
      borderRightColor: palette.divider,
      borderRightStyle: "solid",
    },
    sidenav_content: {
      display: "flex",
      flexDirection: "column",
      flex: "auto",
      justifyContent: "space-between",
      width: `calc(56px + env(safe-area-inset-left))`,
      paddingLeft: 4,
      paddingRight: 4,
      paddingBottom: "env(safe-area-inset-bottom)",
      overflowY: "scroll",
    },
    sidenav_toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      marginRight: spacing(2),
      ...mixins.toolbar,
    },
    sidenav_logo: {
      cursor: "pointer",
    },
    sidenav_listItem: {
      justifyContent: "center",

      paddingTop: 16,
      paddingBottom: 16,
      borderRadius: 4,
    },
    sidenav_ul: {
      "&> *": {
        marginTop: 4,
        marginBottom: 4,
        "&:first-child": {
          marginTop: 0,
        },
        "&:last-child": {
          marginBottom: 0,
        },
      },
    },
    sidenav_icon: {
      minWidth: "auto",
    },
  })
);

export default useStyles;
