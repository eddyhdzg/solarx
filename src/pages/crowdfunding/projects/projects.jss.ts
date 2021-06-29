import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projects_root: {
      marginBottom: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      },
    },
    projects_filters: {
      display: "flex",
      alignItems: "center",
      "&>:not(:last-child)": {
        marginRight: theme.spacing(0.5),
        [theme.breakpoints.up("sm")]: {
          marginRight: theme.spacing(1),
        },
      },
    },
  })
);

export default useStyles;
