import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectCard_root: {
      maxWidth: theme.spacing(55),
      margin: "auto",
      borderRadius: 10,
      backgroundColor: "#1B1B1B",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#313537",
      boxShadow:
        "0px 15px 29px rgba(0, 0, 0, 0.21), 0px 1.87823px 3.63125px rgba(0, 0, 0, 0.105)",
      zIndex: 1,
    },
    projectCard_content: {
      padding: theme.spacing(4),
    },
    projectCard_progressText: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    projectCard_gradientLinearProgress: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    projectCard_typographyBody2: {
      [theme.breakpoints.only("xxs")]: {
        fontSize: "11px",
      },
      [theme.breakpoints.only("xs")]: {
        fontSize: "13px",
      },
    },
    projectCard_typographySubtitle1: {
      whiteSpace: "nowrap",
    },
    projectCard_stats: {
      display: "flex",
      flexWrap: "wrap",
      marginTop: theme.spacing(-3),
      "& > div": {
        marginTop: theme.spacing(3),
      },
      "& > div:not(:last-child)": {
        marginRight: theme.spacing(4),
      },
    },
    projectCard_summary: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    projectCard_text: {
      fontSize: 16,
      fontWeight: 500,
    },
    projectCard_li: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "&:not(:last-child)": {
        marginBottom: theme.spacing(3),
      },
    },
    projectCard_buttonGroup: {
      "& > button:not(:first-child)": {
        borderLeftColor: "transparent",
      },
      "& > button:disabled": {
        borderTopColor: "rgba(255, 255, 255, 0.23)",
        borderBottomColor: "rgba(255, 255, 255, 0.23)",
      },
      "& > button:disabled:first-child": {
        borderLeftColor: "rgba(255, 255, 255, 0.23)",
      },
    },
    projectCard_counter: {
      color: "inherit !important",
      paddingLeft: 0,
      paddingRight: 0,
    },
    projectCard_counterSpan: {
      minWidth: theme.spacing(5),
    },
    projectCard_divider: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    projectCard_actions: {
      backgroundColor: theme.palette.grey[900],
      padding: theme.spacing(4),
      flexDirection: "column",
      alignItems: "stretch",
    },
    projectCard_price: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      marginBottom: theme.spacing(3),
    },
  })
);

export default useStyles;
