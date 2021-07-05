import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectFormSummary_root: {
      [theme.breakpoints.up("lg")]: {
        position: "sticky",
        top: 0,
      },
    },
    projectFormSummary_header: {
      marginBottom: theme.spacing(2),
    },
    projectFormSummary_ul: {
      padding: 0,
      margin: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      flex: 1,
      "&:first-child": {
        marginRight: theme.spacing(4),
      },
      "& li": {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(0.5),
      },
      "& p": {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
    projectFormSummary_divider: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    projectFormSummary_cardActions: {
      justifyContent: "center",
      alignItems: "flex-end",
      backgroundColor: "rgba(255,255,255,0.08)",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    projectFormSummary_error: {
      color: theme.palette.error.main,
      "&:after": {
        content: "' ❌'",
      },
    },
    projectFormSummary_success: {
      color: theme.palette.success.main,
      "&:after": {
        content: "' ✅'",
      },
    },
  })
);

export default useStyles;
