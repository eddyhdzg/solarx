import { useEffect, useState } from "react";
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
  ProjectDiscountFormLayout,
  EditProjectDatesFormContext,
} from "forms";
import { ProjectSummary } from "organisms";

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
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <EditProjectTabsContainer>
        <Tabs
          value={tabIndex}
          onChange={(_, index) => setTabIndex(index)}
          selectionFollowsFocus
        >
          <Tab disableRipple label="General" />
          <Tab disableRipple label="Numbers" />
          <Tab disableRipple label="Media" />
          <Tab disableRipple label="Discounts" />
          <Tab disableRipple label="Dates" />
        </Tabs>
      </EditProjectTabsContainer>
      <Grid container spacing={3}>
        <TabContext value={tabIndex.toString()}>
          <GridItem md={7} lg={8} xl={9}>
            <EditProjectTabPanel value="0">
              <EditProjectGeneralFormContext />
            </EditProjectTabPanel>
            <EditProjectTabPanel value="1">
              <EditProjectNumberFormContext />
            </EditProjectTabPanel>
            <EditProjectTabPanel value="2">
              <EditProjectMediaFormContext />
            </EditProjectTabPanel>
            <EditProjectTabPanel value="3">
              <ProjectDiscountFormLayout />
            </EditProjectTabPanel>
            <EditProjectTabPanel value="4">
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
