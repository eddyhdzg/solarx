import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "types";

const useStyles = makeStyles(({ palette, mixins }: Theme) =>
  createStyles({
    desktopAppbar_subnav: {
      display: "flex",
      flexDirection: "column",
      flex: "auto",
    },
    desktopAppbar_subnavHeader: {
      display: "flex",
      alignItems: "center",
      paddingLeft: "24px",
      ...mixins.toolbar,
    },
    desktopAppbar_title: {
      margin: 0,
    },
    desktopAppbar_lists: {
      paddingLeft: "8px",
      paddingRight: "8px",
      overflowY: "scroll",
      overscrollBehavior: "contain",
    },
    desktopAppbar_subheader: {
      lineHeight: "unset",
      paddingTop: "8px",
      paddingBottom: "8px",
      fontSize: "0.75rem",
      color: palette.text.hint,
      backgroundColor: palette.background.default,
    },
    desktopAppbar_listItem: {
      borderRadius: 4,
    },
  })
);

export default useStyles;
