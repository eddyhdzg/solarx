import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mobileSubSidenav_root: {
      position: "relative",
      width: `calc(100% + ${theme.spacing(4)}px)`,
      left: -theme.spacing(2),
    },
    mobileSubSidenav_subheader: {
      lineHeight: "unset",
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      fontSize: "0.75rem",
      color: theme.palette.text.hint,
      backgroundColor: theme.palette.background.default,
    },
    mobileSubSidenav_listItem: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    mobileSubSidenav_icon: {
      color: theme.palette.text.hint,
    },
  })
);

export default useStyles;
