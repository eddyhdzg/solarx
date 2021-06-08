import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    signInForm_button: {
      "& .firebaseui-card-content": {
        padding: 0,
      },

      "& .firebaseui-idp-list": {
        margin: 0,
      },

      "& .firebaseui-list-item": {
        marginBottom: "0 !important",
      },

      "& .firebaseui-idp-button": {
        maxWidth: theme.spacing(40),
        padding: theme.spacing(1.5, 4),
      },
    },
  })
);

export default useStyles;
