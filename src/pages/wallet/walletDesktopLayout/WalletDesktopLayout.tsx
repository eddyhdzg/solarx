import { Grid } from "@mui/material";
import WalletActions from "../walletActions/WalletActions";
import {
  WalletPortfolioSection,
  WalletHistorySection,
} from "../walletSections/WalletSections";
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
