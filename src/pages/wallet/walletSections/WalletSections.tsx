import { Grid } from "@mui/material";
import WalletSummary from "../walletSummary/WalletSummary";
import WalletShares from "../walletShares/WalletShares";
import WalletHistory from "../walletHistory/WalletHistory";
import WalletChartContainer from "../walletChartContainer/WalletChartContainer";
import { GridItem } from "components";

export function WalletPortfolioSection() {
  return (
    <Grid container spacing={3}>
      <GridItem>
        <WalletSummary />
      </GridItem>
      <GridItem>
        <WalletChartContainer />
      </GridItem>
      <GridItem>
        <WalletShares />
      </GridItem>
    </Grid>
  );
}

export function WalletHistorySection() {
  return <WalletHistory />;
}
