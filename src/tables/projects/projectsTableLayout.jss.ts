import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectTableLayout_root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexWrap: "wrap",
    },
    projectTableLayout_filters: {
      display: "flex",
      alignItems: "center",
      "&>:not(:last-child)": {
        marginRight: theme.spacing(0.5),
        [theme.breakpoints.up("md")]: {
          marginRight: theme.spacing(1),
        },
      },
    },
    projectTableLayout_wrapper: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      flexWrap: "wrap",
      marginBottom: theme.spacing(1),
    },
    projectTableLayout_wrapper__admin: {
      justifyContent: "space-between",
    },
    projectTableLayout_button: {
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
    projectTableLayout_button__crowdfunding: {
      display: "none",
    },
    projectTableLayout_tooltip: {
      textTransform: "capitalize",
    },
  })
);

export default useStyles;
