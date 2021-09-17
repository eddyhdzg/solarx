import { Grid } from "@material-ui/core";
import WalletSummary from "../walletSummary/WalletSummary";
import WalletShares from "../walletShares/WalletShares";
import WalletHistory from "../walletHistory/WalletHistory";
import WalletChartContainer from "../walletChartContainer/WalletChartContainer";

export function WalletPortfolioSection() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <WalletSummary />
      </Grid>
      <Grid item xs={12}>
        <WalletChartContainer />
      </Grid>
      <Grid item xs={12}>
        <WalletShares />
      </Grid>
    </Grid>
  );
}

export function WalletHistorySection() {
  return <WalletHistory />;
}
