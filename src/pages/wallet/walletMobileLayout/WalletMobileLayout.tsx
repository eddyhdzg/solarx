import { useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { TabPanel, TabContext } from "@material-ui/lab";
import {
  WalletPortfolioSection,
  WalletHistorySection,
} from "../walletSections/WalletSections";
import useStyles from "./walletMobileLayout.jss";
import WalletActions from "../walletActions/WalletActions";

export default function WalletMobileLayout() {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <TabContext value={tabIndex.toString()}>
      <Tabs
        value={tabIndex}
        onChange={(_, index) => setTabIndex(index)}
        indicatorColor="primary"
        textColor="primary"
        centered
        className={classes.walletMobileLayout_tabs}
      >
        <Tab label="Porfolio" className={classes.walletMobileLayout_tab} />
        <Tab label="Actions" className={classes.walletMobileLayout_tab} />
        <Tab label="History" className={classes.walletMobileLayout_tab} />
      </Tabs>
      <TabPanel value="0" className={classes.walletMobileLayout_panel}>
        <WalletPortfolioSection />
      </TabPanel>
      <TabPanel value="1" className={classes.walletMobileLayout_panel}>
        <WalletActions />
      </TabPanel>
      <TabPanel value="2" className={classes.walletMobileLayout_panel}>
        <WalletHistorySection />
      </TabPanel>
    </TabContext>
  );
}
