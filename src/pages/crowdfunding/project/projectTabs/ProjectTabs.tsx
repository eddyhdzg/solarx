import { useState } from "react";
import { SegmentedControl } from "components";

export default function ProjectTabs() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <SegmentedControl
      value={tabIndex}
      onChange={(_, index) => setTabIndex(index)}
    >
      <SegmentedControl.Segment disableRipple label="Tab1" />
      <SegmentedControl.Segment disableRipple label="Tab2" />
      <SegmentedControl.Segment disableRipple label="Tab3" />
    </SegmentedControl>
  );
}
