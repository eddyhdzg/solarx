import { useState } from "react";
import { Notion, Segment, SegmentedControl } from "components";
import { TabContext } from "@mui/lab";
import { useTranslation } from "react-i18next";
import { ProjectTabsContainer, StyledTabPanel } from "./ProjectTabs.styled";

interface IProjectTabsProps {
  general?: string;
  graphs?: string;
  about?: string;
}

export default function ProjectTabs(props: IProjectTabsProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      <TabContext value={tabIndex.toString()}>
        <ProjectTabsContainer>
          <SegmentedControl
            value={tabIndex}
            onChange={(_, index) => setTabIndex(index)}
            selectionFollowsFocus
            variant="scrollable"
          >
            <Segment disableRipple label={t("projects.general")} />
            <Segment
              disableRipple
              label={t("pages.crowdfunding.project.graphs")}
            />
            <Segment
              disableRipple
              label={t("pages.crowdfunding.project.about")}
            />
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
