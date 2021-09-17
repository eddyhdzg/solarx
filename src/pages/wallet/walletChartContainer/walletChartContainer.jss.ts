import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    walletChartContainer_root: {
      backgroundColor: "#1B1B1B",
      borderRadius: theme.spacing(0.5),
      padding: theme.spacing(3),
    },
    walletChartContainer_titleWrapper: {
      display: "flex",
      flexDirection: "column",
    },
    walletChartContainer_title: {
      marginRight: theme.spacing(0.5),
    },
    walletChartContainer_titleActivityWrapper: {
      display: "flex",
      alignItems: "center",
      marginLeft: theme.spacing(-1),
    },
    walletChartContainer_titleActivity: {
      color: "#00BFA5",
    },
    formControl: {
      marginBottom: theme.spacing(2),
      minWidth: 120,
    },
    walletChartContainer_header: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);

export default useStyles;
