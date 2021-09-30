import { useState } from "react";
import { SegmentedControl } from "components";
import { TabPanel, TabContext } from "@mui/lab";
import WithdrawTab from "../withdrawTab/WithdrawTab";
import DepositTab from "../depositTab/DepositTab";
import { WalletActionsRoot, StyledTabPanel } from "./WalletActions.styled";

export default function WalletActions() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <WalletActionsRoot>
      <TabContext value={tabIndex.toString()}>
        <SegmentedControl
          value={tabIndex}
          onChange={(_, index) => setTabIndex(index)}
          selectionFollowsFocus
        >
          <SegmentedControl.Segment disableRipple label="Withdraw" />
          <SegmentedControl.Segment disableRipple label="Deposit" />
        </SegmentedControl>
        <StyledTabPanel value="0">
          <WithdrawTab />
        </StyledTabPanel>
        <TabPanel value="1">
          <DepositTab />
        </TabPanel>
      </TabContext>
    </WalletActionsRoot>
  );
}
