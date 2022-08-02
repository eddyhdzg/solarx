import { Grid } from "@mui/material";
import {
  GridItem,
  WalletHistory,
  WalletBalance,
  WalletPanels,
  WalletTotalBalance,
  WalletTimeline,
} from "components";

export default function WalletDesktopLayout() {
  return (
    <Grid container spacing={3}>
      <GridItem lg={7}>
        <Grid container spacing={3}>
          <GridItem>
            <WalletPanels />
          </GridItem>
          <GridItem>
            <WalletTimeline />
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem lg={5}>
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
