import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layout_root: {
      [theme.breakpoints.up("md")]: {
        marginLeft: theme.spacing(7),
      },
    },
    layout_notch: {
      minHeight: "env(safe-area-inset-top)",
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: theme.zIndex.drawer - 1,
      ...theme.custom.glassBackground,
    },
    layout_content: {
      flexGrow: 1,
      padding: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(3),
      },
    },
    layout_toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    layout_offset: {
      [theme.breakpoints.down("sm")]: {
        ...theme.mixins.toolbar,
      },
    },
  })
);

export default useStyles;
