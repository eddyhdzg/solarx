import { Grid } from "@mui/material";
import {
  WalletActions,
  WalletPortfolioSection,
  WalletHistorySection,
} from "organisms";
import { GridItem } from "components";

export default function WalletDesktopLayout() {
  return (
    <Grid container spacing={3}>
      <GridItem lg={8}>
        <WalletPortfolioSection />
      </GridItem>
      <GridItem lg={4}>
        <Grid container spacing={3}>
          <GridItem>
            <WalletActions />
          </GridItem>
          <GridItem>
            <WalletHistorySection />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
}
