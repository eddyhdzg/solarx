import { useState } from "react";
import { TabContext } from "@mui/lab";
import {
  WalletHistory,
  WalletBalance,
  WalletTotalBalance,
  WalletShares,
  WalletTimeline,
} from "organisms";
import { Grid } from "@mui/material";
import { GridItem } from "components";
import {
  StyledTabs,
  StyledTab,
  StyledTabPanel,
} from "./WalletMobileLayout.styled";

export default function WalletMobileLayout() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <TabContext value={tabIndex.toString()}>
      <StyledTabs
        value={tabIndex}
        onChange={(_, index) => setTabIndex(index)}
        indicatorColor="primary"
        textColor="primary"
        centered
        variant="scrollable"
      >
        <StyledTab label="Balance" />
        <StyledTab label="Shares" />
        <StyledTab label="History" />
        <StyledTab label="Timeline" />
      </StyledTabs>
      <StyledTabPanel value="0">
        <Grid container spacing={3}>
          <GridItem sm={5}>
            <WalletTotalBalance />
          </GridItem>
          <GridItem sm={7}>
            <WalletBalance />
          </GridItem>
        </Grid>
      </StyledTabPanel>
      <StyledTabPanel value="1">
        <WalletShares />
      </StyledTabPanel>
      <StyledTabPanel value="2">
        <WalletHistory />
      </StyledTabPanel>
      <StyledTabPanel value="3">
        <WalletTimeline />
      </StyledTabPanel>
    </TabContext>
  );
}
