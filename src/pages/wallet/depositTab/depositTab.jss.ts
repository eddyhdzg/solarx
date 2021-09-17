import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    depositTab_subtitle: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(2),
    },
    depositTab_button: {
      minHeight: theme.spacing(8),
    },
  })
);

export default useStyles;
