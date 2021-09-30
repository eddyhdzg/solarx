import { useState } from "react";
import { Grid } from "@mui/material";
import ProjectFormBody from "./projectFormBody/ProjectFormBody";
import { ProjectForms } from "types";
import { checkKeyDown } from "utils";
import { GridItem, SegmentedControl } from "components";
import { TabContext } from "@mui/lab";
import {
  ProjectFormTabsContainer,
  ProjectFormTabPanel,
} from "./ProjectForm.styled";
import ProjectFormNumber from "./projectFormNumber/ProjectFormNumber";

interface IProjectForm {
  onSubmit: () => void;
  title: ProjectForms;
}

export default function ProjectForm({ onSubmit, title }: IProjectForm) {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
      onKeyDown={(e) => checkKeyDown(e)}
    >
      <Grid container spacing={3}>
        <GridItem lg={9}>
          <TabContext value={tabIndex.toString()}>
            <ProjectFormTabsContainer>
              <SegmentedControl
                value={tabIndex}
                onChange={(_, index) => setTabIndex(index)}
                selectionFollowsFocus
                size="small"
              >
                <SegmentedControl.Segment
                  disableRipple
                  label="General"
                  size="small"
                />
                <SegmentedControl.Segment
                  disableRipple
                  label="Numbers"
                  size="small"
                />
                <SegmentedControl.Segment
                  disableRipple
                  label="Media"
                  size="small"
                />
              </SegmentedControl>
            </ProjectFormTabsContainer>
            <ProjectFormTabPanel value="0">
              <ProjectFormBody title={title} />
            </ProjectFormTabPanel>
            <ProjectFormTabPanel value="1">
              <ProjectFormNumber />
            </ProjectFormTabPanel>
          </TabContext>
        </GridItem>
      </Grid>
    </form>
  );
}
