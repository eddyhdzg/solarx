import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    createProjectForm_form: {
      "& >*": {
        marginBottom: theme.spacing(3),
      },
    },
    createProjectForm_header: {
      marginBottom: theme.spacing(3),
    },
    createProjectForm_paper: {
      padding: theme.spacing(2),
    },
  })
);

export default useStyles;
