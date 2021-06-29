import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mobileLayout_notch: {
      minHeight: "env(safe-area-inset-top)",
      backgroundColor: theme.palette.background.default,
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: theme.zIndex.appBar + 1,
    },
    mobileLayout_offset: theme.mixins.toolbar,
    mobileLayout_main: {
      padding: theme.spacing(3, 2),
    },
  })
);

export default useStyles;
