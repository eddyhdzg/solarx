import { useState } from "react";
import { Grid, Tabs } from "@mui/material";
import { TabContext } from "@mui/lab";
import {
  WalletHistory,
  WalletBalance,
  WalletTotalBalance,
  WalletPanels,
  WalletTimeline,
} from "organisms";
import { GridItem } from "atomic";
import { useTranslation } from "react-i18next";
import { StyledTab, StyledTabPanel } from "./WalletMobileLayout.styled";

export default function WalletMobileLayout() {
  const { t } = useTranslation();
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <TabContext value={tabIndex.toString()}>
      <Tabs
        value={tabIndex}
        onChange={(_, index) => setTabIndex(index)}
        indicatorColor="primary"
        textColor="primary"
        centered
        variant="scrollable"
        sx={{
          pb: 3,
          px: 0,
        }}
      >
        <StyledTab label={t("pages.wallet.sections.balance")} />
        <StyledTab label={t("pages.wallet.sections.panels")} />
        <StyledTab label={t("pages.wallet.sections.history")} />
        <StyledTab label={t("pages.wallet.sections.timeline")} />
      </Tabs>
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
        <WalletPanels />
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
