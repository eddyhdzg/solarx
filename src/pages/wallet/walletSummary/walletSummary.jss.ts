import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    walletSummary_root: {
      backgroundColor: "#1B1B1B",
      padding: theme.spacing(3),
      borderRadius: theme.spacing(0.5),
    },
    walletSummary_item: {
      display: "flex",
      alignItems: "center",
    },
    walletSummary_iconWrapper: {
      backgroundColor: "#2E2E2E",
      borderRadius: theme.spacing(0.5),
      display: "flex",
      alignItems: "center",
      marginRight: theme.spacing(1.5),
      padding: theme.spacing(1),
    },
    walletSummary_icon__totalBalance: {
      color: theme.custom.totalBalance,
    },
    walletSummary_icon__stocks: {
      color: theme.custom.stocks,
    },
    walletSummary_icon__cash: {
      color: theme.custom.cash,
    },
  })
);

export default useStyles;
