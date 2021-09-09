import { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useTabsStyles, useTabStyles } from "./projectTabs.jss";

export default function ProjectTabs() {
  const [tabIndex, setTabIndex] = useState(0);
  const tabsStyles = useTabsStyles();
  const tabItemStyles = useTabStyles();
  return (
    <Tabs
      classes={tabsStyles}
      value={tabIndex}
      onChange={(_, index) => setTabIndex(index)}
    >
      <Tab classes={tabItemStyles} disableRipple label="Tab1" />
      <Tab classes={tabItemStyles} disableRipple label="Tab2" />
      <Tab classes={tabItemStyles} disableRipple label="Tab3" />
    </Tabs>
  );
}
