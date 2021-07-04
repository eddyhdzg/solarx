import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectFormBody_form: {
      "& >*": {
        marginBottom: theme.spacing(3),
      },
    },
    projectFormBody_header: {
      marginBottom: theme.spacing(3),
    },
    projectFormBody_paper: {
      padding: theme.spacing(2),
    },
  })
);

export default useStyles;
