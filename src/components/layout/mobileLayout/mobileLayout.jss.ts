import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mobileLayout_notch: {
      minHeight: "env(safe-area-inset-top)",
      width: "100%",
      backgroundColor: theme.palette.background.default,
      position: "fixed",
      top: 0,
      zIndex: theme.zIndex.appBar,
    },
    mobileLayout_offset: theme.mixins.toolbar,
    mobileLayout_appBar: {
      top: "auto",
      bottom: 0,
      width: "100%",
    },
  })
);

export default useStyles;
