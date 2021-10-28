import { useState } from "react";
import { SegmentedControl } from "components";
import { Notion } from "components";
import { TabContext } from "@mui/lab";
import { ProjectTabsContainer, StyledTabPanel } from "./ProjectTabs.styled";

interface IProjectTabsProps {
  general?: string;
  graphs?: string;
  about?: string;
}

export default function ProjectTabs(props: IProjectTabsProps) {
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
          <Notion pageId={props.general} />
        </StyledTabPanel>
        <StyledTabPanel value="1">
          <Notion pageId={props.graphs} />
        </StyledTabPanel>
        <StyledTabPanel value="2">
          <Notion pageId={props.about} />
        </StyledTabPanel>
      </TabContext>
    </>
  );
}
