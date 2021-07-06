import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    useProjectsColumns_chip: {
      fontWeight: 600,
    },
    useProjectsColumns_alignRight: {
      textAlign: "right",
    },
    useProjectsColumns_noPadding: {
      paddingLeft: theme.spacing(0.5),
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
    },
  })
);

export default useStyles;
