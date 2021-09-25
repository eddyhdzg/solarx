import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { TabPanel, TabContext } from "@mui/lab";
import {
  WalletPortfolioSection,
  WalletHistorySection,
} from "../walletSections/WalletSections";
import WalletActions from "../walletActions/WalletActions";

export default function WalletMobileLayout() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <TabContext value={tabIndex.toString()}>
      <Tabs
        value={tabIndex}
        onChange={(_, index) => setTabIndex(index)}
        indicatorColor="primary"
        textColor="primary"
        centered
        sx={{
          pb: 3,
        }}
      >
        <Tab
          label="Porfolio"
          sx={{
            px: 4,
          }}
        />
        <Tab
          label="Actions"
          sx={{
            px: 4,
          }}
        />
        <Tab
          label="History"
          sx={{
            px: 4,
          }}
        />
      </Tabs>
      <TabPanel
        value="0"
        sx={{
          p: 0,
        }}
      >
        <WalletPortfolioSection />
      </TabPanel>
      <TabPanel
        value="1"
        sx={{
          p: 0,
        }}
      >
        <WalletActions />
      </TabPanel>
      <TabPanel
        value="2"
        sx={{
          p: 0,
        }}
      >
        <WalletHistorySection />
      </TabPanel>
    </TabContext>
  );
}
