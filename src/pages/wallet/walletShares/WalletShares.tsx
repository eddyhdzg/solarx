import { Paper, Typography } from "@material-ui/core";
import useStyles from "./walleShares.jss";
import { WalletSharesTable } from "tables";

export default function WalletSummary() {
  const classes = useStyles();

  return (
    <Paper className={classes.walletShares_root} elevation={3}>
      <Typography variant="subtitle1" className={classes.walletShares_title}>
        Shares
      </Typography>
      <WalletSharesTable />
    </Paper>
  );
}
