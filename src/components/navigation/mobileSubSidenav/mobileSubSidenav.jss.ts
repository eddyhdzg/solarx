import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    desktopAppbar_subheader: {
      lineHeight: "unset",
      paddingTop: "8px",
      paddingBottom: theme.spacing(1),
      fontSize: "0.75rem",
      color: theme.palette.text.hint,
      backgroundColor: theme.palette.background.default,
    },
    desktopAppbar_listItem: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    desktopAppbar_icon: {
      color: theme.palette.text.hint,
    },
  })
);

export default useStyles;
