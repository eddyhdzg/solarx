import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accountButton_iconButton: {
      padding: theme.spacing(0.5),
    },
    accountButton_icon: {
      marginRight: theme.spacing(1.5),
    },
    accountButton_hide: {
      display: "none",
    },
  })
);

export default useStyles;
