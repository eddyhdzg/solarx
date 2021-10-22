import { useEffect } from "react";
import { useHeader } from "hooks";
import { Seo, PageTitle, GridItem } from "components";
import { useTranslation } from "react-i18next";
import { Tabs, Tab, Grid } from "@mui/material";
import { TabContext } from "@mui/lab";
import {
  EditProjectTabsContainer,
  EditProjectTabPanel,
} from "./EditProject.styled";
import {
  EditProjectGeneralFormContext,
  EditProjectNumberFormContext,
  EditProjectMediaFormContext,
  ProjectBuyingOptionsFormLayout,
  EditProjectDatesFormContext,
  EditProjectContentFormContext,
} from "forms";
import { ProjectSummary } from "organisms";
import { useLocation, useHistory } from "react-router-dom";
// @ts-ignore
import queryString from "query-string";

export default function EditPorjectPage() {
  const { t } = useTranslation();
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: t("router.projects"), url: "/admin/projects" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.admin.editProject.editProject")}
        description={t("pages.admin.editProject.editProjectDescription")}
      />
      <PageTitle>{t("pages.admin.editProject.editProject")}</PageTitle>
      <EditProject />
    </>
  );
}

function EditProject() {
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
              <EditProjectGeneralFormContext />
            </EditProjectTabPanel>
            <EditProjectTabPanel value="1">
              <EditProjectNumberFormContext />
            </EditProjectTabPanel>
            <EditProjectTabPanel value="2">
              <ProjectBuyingOptionsFormLayout />
            </EditProjectTabPanel>
            <EditProjectTabPanel value="3">
              <EditProjectMediaFormContext />
            </EditProjectTabPanel>
            <EditProjectTabPanel value="4">
              <EditProjectContentFormContext />
            </EditProjectTabPanel>
            <EditProjectTabPanel value="5">
              <EditProjectDatesFormContext />
            </EditProjectTabPanel>
          </GridItem>
          <GridItem md={5} lg={4} xl={3}>
            <ProjectSummary />
          </GridItem>
        </TabContext>
      </Grid>
    </>
  );
}
