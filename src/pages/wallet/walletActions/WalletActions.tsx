import { useState } from "react";
import { SegmentedControl } from "components";
import { Paper } from "@mui/material";
import { TabPanel, TabContext } from "@mui/lab";
import WithdrawTab from "../withdrawTab/WithdrawTab";
import DepositTab from "../depositTab/DepositTab";

export default function WalletActions() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Paper
      sx={{
        p: 3,
      }}
    >
      <TabContext value={tabIndex.toString()}>
        <SegmentedControl
          value={tabIndex}
          onChange={(_, index) => setTabIndex(index)}
          centered
          selectionFollowsFocus
        >
          <SegmentedControl.Segment disableRipple label="Withdraw" />
          <SegmentedControl.Segment disableRipple label="Deposit" />
        </SegmentedControl>
        <TabPanel
          value="0"
          sx={{
            p: 0,
          }}
        >
          <WithdrawTab />
        </TabPanel>
        <TabPanel
          value="1"
          sx={{
            p: 0,
          }}
        >
          <DepositTab />
        </TabPanel>
      </TabContext>
    </Paper>
  );
}
