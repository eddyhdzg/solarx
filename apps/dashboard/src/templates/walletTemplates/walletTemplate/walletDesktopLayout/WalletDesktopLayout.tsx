import { Grid } from "@mui/material";
import { GridItem } from "components";
import {
  WalletHistory,
  WalletBalance,
  WalletShares,
  WalletTotalBalance,
  WalletTimeline,
} from "organisms";

export default function WalletDesktopLayout() {
  return (
    <Grid container spacing={3}>
      <GridItem lg={8}>
        <Grid container spacing={3}>
          <GridItem>
            <WalletShares />
          </GridItem>
          <GridItem>
            <WalletTimeline />
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem lg={4}>
        <Grid container spacing={3}>
          <GridItem>
            <WalletTotalBalance />
          </GridItem>
          <GridItem>
            <WalletBalance />
          </GridItem>
          <GridItem>
            <WalletHistory />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
}
