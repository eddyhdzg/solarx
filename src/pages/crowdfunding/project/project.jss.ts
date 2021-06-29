import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    project_mb2: {
      marginBottom: theme.spacing(2),
    },
    project_mb4: {
      marginBottom: theme.spacing(2),
    },
  })
);

export default useStyles;
