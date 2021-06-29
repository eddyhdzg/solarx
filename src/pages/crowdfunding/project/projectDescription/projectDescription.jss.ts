import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    project_subSection: {
      marginBottom: theme.spacing(3),
    },
    project_progressText: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
    },
    project_divider: {
      marginBottom: theme.spacing(3),
    },
  })
);

export default useStyles;
