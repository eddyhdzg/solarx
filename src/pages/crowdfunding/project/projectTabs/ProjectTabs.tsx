import { useState } from "react";
import { SegmentedControl } from "components";
import Notion from "notion/Example";
import { TabContext } from "@mui/lab";
import { ProjectTabsContainer, StyledTabPanel } from "./ProjectTabs.styled";

export default function ProjectTabs() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <TabContext value={tabIndex.toString()}>
        <ProjectTabsContainer>
          <SegmentedControl
            value={tabIndex}
            onChange={(_, index) => setTabIndex(index)}
            selectionFollowsFocus
          >
            <SegmentedControl.Segment disableRipple label="General" />
            <SegmentedControl.Segment disableRipple label="Graphs" />
            <SegmentedControl.Segment disableRipple label="About" />
          </SegmentedControl>
        </ProjectTabsContainer>
        <StyledTabPanel value="0">
          <Notion />
        </StyledTabPanel>
      </TabContext>
    </>
  );
}
