import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "sticky",
      [theme.breakpoints.up("lg")]: {
        top: 0,
      },
    },
    header: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: theme.spacing(2),
      flexWrap: "wrap",
    },
    projectCardSummary_ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    projectCardSummary_li: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: theme.spacing(1),
    },
    projectCardSummary_mr1: {
      marginRight: theme.spacing(1),
    },
    projectCardSummary_divider: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    projectCardSummary_input: {
      width: "100%",
      maxWidth: "120px",
      [theme.breakpoints.only("xxs")]: {
        marginBottom: theme.spacing(1),
      },
    },
    projectCardSummary_inputs: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      [theme.breakpoints.up("xs")]: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
    },
    projectCardSummary_cardActions: {
      justifyContent: "center",
      alignItems: "flex-end",
      backgroundColor: "rgba(255,255,255,0.08)",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  })
);

export default useStyles;