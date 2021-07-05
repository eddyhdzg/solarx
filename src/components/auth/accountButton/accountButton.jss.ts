import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accountButton_iconButton: {
      padding: theme.spacing(0.5),
    },
    accountButton_icon: {
      marginRight: theme.spacing(1.5),
    },
    accountButton_test: {
      maxHeight: theme.spacing(5),
      "& .firebaseui-card-content": {
        padding: 0,
      },
      "& .firebaseui-idp-list": {
        margin: 0,
      },
      "& .firebaseui-list-item": {
        marginBottom: "0 !important",
      },
    },
    accountButton_hide: {
      display: "none",
    },
  })
);

export default useStyles;
