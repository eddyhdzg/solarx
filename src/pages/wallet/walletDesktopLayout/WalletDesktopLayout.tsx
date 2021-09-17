import { Grid } from "@material-ui/core";
import WalletActions from "../walletActions/WalletActions";
import {
  WalletPortfolioSection,
  WalletHistorySection,
} from "../walletSections/WalletSections";

export default function WalletDesktopLayout() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={8}>
        <WalletPortfolioSection />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <WalletActions />
          </Grid>
          <Grid item xs={12}>
            <WalletHistorySection />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
