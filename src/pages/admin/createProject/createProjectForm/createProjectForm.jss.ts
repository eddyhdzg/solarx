import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    createProjectForm_header: {
      marginBottom: theme.spacing(3),
    },
    createProjectForm_paper: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(3),
    },
  })
);

export default useStyles;
