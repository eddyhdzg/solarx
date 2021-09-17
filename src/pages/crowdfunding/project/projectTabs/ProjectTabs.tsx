import { useState } from "react";
import { Tabs, Tab } from "components";

export default function ProjectTabs() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs
      value={tabIndex}
      // @ts-ignore
      onChange={(_, index) => setTabIndex(index)}
    >
      <Tab disableRipple label="Tab1" />
      <Tab disableRipple label="Tab2" />
      <Tab disableRipple label="Tab3" />
    </Tabs>
  );
}
