import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "types";

const useStyles = makeStyles(({ palette, mixins }: Theme) =>
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
      paddingBottom: "env(safe-area-inset-bottom)",
      overflowY: "scroll",
    },
    sidenav_toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      marginRight: "16px",
      ...mixins.toolbar,
    },
    sidenav_logo: {
      cursor: "pointer",
    },
    sidenav_listItem: {
      justifyContent: "flex-end",
      paddingTop: 16,
      paddingBottom: 16,
    },
    sidenav_icon: {
      minWidth: "auto",
    },
  })
);

export default useStyles;
