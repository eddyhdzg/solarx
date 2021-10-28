import { useState } from "react";
import { TabContext } from "@mui/lab";
import {
  WalletPortfolioSection,
  WalletHistorySection,
  WalletActions,
} from "organisms";
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
      >
        <StyledTab label="Porfolio" />
        <StyledTab label="Actions" />
        <StyledTab label="History" />
      </StyledTabs>
      <StyledTabPanel value="0">
        <WalletPortfolioSection />
      </StyledTabPanel>
      <StyledTabPanel value="1">
        <WalletActions />
      </StyledTabPanel>
      <StyledTabPanel value="2">
        <WalletHistorySection />
      </StyledTabPanel>
    </TabContext>
  );
}
