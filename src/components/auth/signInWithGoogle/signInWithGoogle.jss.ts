import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    signInWithGoogle_button: {
      background: theme.palette.common.black,
      boxShadow: theme.shadows[3],
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
      [theme.breakpoints.only("xxs")]: {
        padding: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
      },
    },
    accountButton_text: {
      textTransform: "none",
      [theme.breakpoints.only("xxs")]: {
        fontSize: "12px",
      },
    },
  })
);

export default useStyles;
