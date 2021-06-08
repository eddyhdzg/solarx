import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, mixins, spacing }: Theme) =>
  createStyles({
    desktopAppbar_subnav: {
      display: "flex",
      flexDirection: "column",
      flex: "auto",
    },
    desktopAppbar_subnavHeader: {
      display: "flex",
      alignItems: "center",
      paddingLeft: spacing(3),
      ...mixins.toolbar,
    },
    desktopAppbar_title: {
      margin: 0,
    },
    desktopAppbar_lists: {
      paddingLeft: spacing(1),
      paddingRight: spacing(1),
      overflowY: "scroll",
      overscrollBehavior: "contain",
    },
    desktopAppbar_subheader: {
      lineHeight: "unset",
      paddingTop: spacing(1),
      paddingBottom: spacing(1),
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
