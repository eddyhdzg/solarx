import { GridItem } from "components";
import { Tabs, Tab, Grid } from "@mui/material";
import { TabContext } from "@mui/lab";
import {
  EditProjectGeneralForm,
  EditProjectNumberForm,
  EditProjectMediaForm,
  ProjectBuyingOptionsForm,
  EditProjectDatesForm,
  EditProjectContentForm,
} from "forms";
import { AdminProjectSummary } from "organisms";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import {
  EditProjectTabsContainer,
  EditProjectTabPanel,
} from "./AdminEditProjectTemplate.styled";

export default function AdminEditProjectTemplate() {
  const { search, pathname } = useLocation();
  const { tab = "0" } = queryString.parse(search) as { tab: string };
  const history = useHistory();

  const handleChange = (index: number) => {
    history.replace({
      pathname,
      search: queryString.stringify({ tab: index.toString() }),
    });
  };

  return (
    <>
      <EditProjectTabsContainer>
        <Tabs
          value={Number(tab)}
          onChange={(_, index) => handleChange(index)}
          selectionFollowsFocus
          variant="scrollable"
        >
          <Tab disableRipple label="General" />
          <Tab disableRipple label="Numbers" />
          <Tab disableRipple label="Buying Options" />
          <Tab disableRipple label="Media" />
          <Tab disableRipple label="CMS" />
          <Tab disableRipple label="Dates" />
        </Tabs>
      </EditProjectTabsContainer>
      <Grid container spacing={3}>
        <TabContext value={tab}>
          <GridItem md={7} lg={8} xl={9}>
            <EditProjectTabPanel value="0">
              <EditProjectGeneralForm />
            </EditProjectTabPanel>
            <EditProjectTabPanel value="1">
              <EditProjectNumberForm />
            </EditProjectTabPanel>
            <EditProjectTabPanel value="2">
              <ProjectBuyingOptionsForm />
            </EditProjectTabPanel>
            <EditProjectTabPanel value="3">
              <EditProjectMediaForm />
            </EditProjectTabPanel>
            <EditProjectTabPanel value="4">
              <EditProjectContentForm />
            </EditProjectTabPanel>
            <EditProjectTabPanel value="5">
              <EditProjectDatesForm />
            </EditProjectTabPanel>
          </GridItem>
          <GridItem md={5} lg={4} xl={3}>
            <AdminProjectSummary />
          </GridItem>
        </TabContext>
      </Grid>
    </>
  );
}
