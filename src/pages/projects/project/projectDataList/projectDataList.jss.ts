import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectGeneralInfo_ulContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
    },
    projectGeneralInfo_ul: {
      padding: 0,
      margin: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      flex: 1,
      whiteSpace: "nowrap",
      "&:first-child": {
        marginRight: theme.spacing(4),
      },
    },
    projectGeneralInfo_li: {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(1.5),
    },
    projectGeneralInfo_icon: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0.5),
      marginRight: theme.spacing(1),
    },
    projectGeneralInfo_listText: {
      display: "flex",
      flexDirection: "column",
    },
    projectGeneralInfo_infoTooltip: {
      marginLeft: theme.spacing(1),
    },
  })
);

export default useStyles;
