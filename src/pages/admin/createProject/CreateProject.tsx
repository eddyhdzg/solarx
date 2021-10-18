import { useEffect } from "react";
import { Seo, PageTitle, GridItem } from "components";
import { useHeader } from "hooks";
import { useTranslation } from "react-i18next";
import { CreateProjectGeneralFormContext } from "forms";
import { Grid } from "@mui/material";

export default function CreateProjectPage() {
  const { t } = useTranslation();
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: t("router.projects"), url: "/admin/projects" });
  }, [onChangeRoute, t]);
  return (
    <>
      <Seo
        title={t("pages.admin.createProject.title")}
        description={t("pages.admin.createProject.description")}
      />
      <PageTitle>{t("pages.admin.createProject.title")}</PageTitle>
      <CreateProject />
    </>
  );
}

function CreateProject() {
  return (
    <Grid container spacing={3}>
      <GridItem lg={9}>
        <CreateProjectGeneralFormContext />
      </GridItem>
    </Grid>
  );
}
