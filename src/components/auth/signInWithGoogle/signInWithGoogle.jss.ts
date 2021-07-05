import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);

export default useStyles;
