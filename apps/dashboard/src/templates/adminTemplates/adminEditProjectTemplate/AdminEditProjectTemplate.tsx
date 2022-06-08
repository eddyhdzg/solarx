import { PageTitle, GridItem } from "components";
import { Container, Tabs, Tab, Grid } from "@mui/material";
import { TabContext } from "@mui/lab";
import {
  EditProjectGeneralForm,
  EditProjectNumberForm,
  EditProjectMediaForm,
  ProjectPriceForm,
  EditProjectDatesForm,
  EditProjectContentForm,
} from "forms";
import { AdminTriggers, AdminProjectSummary } from "organisms";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { useTranslation } from "react-i18next";
import {
  EditProjectTabsContainer,
  EditProjectTabPanel,
} from "./AdminEditProjectTemplate.styled";

export default function AdminEditProjectTemplate() {
  const { t } = useTranslation();
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
    <Container maxWidth="xl">
      <PageTitle>{t("pages.admin.editProject.editProject")}</PageTitle>
      <EditProjectTabsContainer>
        <Tabs
          value={Number(tab)}
          onChange={(_, index) => handleChange(index)}
          selectionFollowsFocus
          variant="scrollable"
        >
          <Tab disableRipple label={t("pages.admin.project.general")} />
          <Tab disableRipple label={t("pages.admin.project.numbers")} />
          <Tab disableRipple label={t("pages.admin.project.prices")} />
          <Tab disableRipple label={t("pages.admin.project.media")} />
          <Tab disableRipple label={t("pages.admin.project.cms")} />
          <Tab disableRipple label={t("pages.admin.project.dates")} />
          <Tab disableRipple label={t("pages.admin.project.triggers")} />
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
              <ProjectPriceForm />
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
            <EditProjectTabPanel value="6">
              <AdminTriggers />
            </EditProjectTabPanel>
          </GridItem>
          <GridItem md={5} lg={4} xl={3}>
            <AdminProjectSummary />
          </GridItem>
        </TabContext>
      </Grid>
    </Container>
  );
}
