import { Grid } from "@mui/material";
import WalletSummary from "../walletSummary/WalletSummary";
import WalletShares from "../walletShares/WalletShares";
import WalletChartContainer from "../walletSummary/walletPieChart/walletChartContainer/WalletChartContainer";
import { GridItem } from "components";

export default function WalletPortfolioSection() {
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
