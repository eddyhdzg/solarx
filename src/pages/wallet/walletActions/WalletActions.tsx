import { useState } from "react";
import { Tabs, Tab } from "components";
import { Paper } from "@material-ui/core";
import { TabPanel, TabContext } from "@material-ui/lab";
import WithdrawTab from "../withdrawTab/WithdrawTab";
import DepositTab from "../depositTab/DepositTab";
import useStyles from "./walletActions.jss";

export default function WalletActions() {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Paper className={classes.walletActions_root} elevation={3}>
      <TabContext value={tabIndex.toString()}>
        <Tabs
          value={tabIndex}
          // @ts-ignore
          onChange={(_, index) => setTabIndex(index)}
          centered
          selectionFollowsFocus
        >
          <Tab disableRipple label="Withdraw" />
          <Tab disableRipple label="Deposit" />
        </Tabs>
        <TabPanel value="0" className={classes.walletActions_panel}>
          <WithdrawTab />
        </TabPanel>
        <TabPanel value="1" className={classes.walletActions_panel}>
          <DepositTab />
        </TabPanel>
      </TabContext>
    </Paper>
  );
}
