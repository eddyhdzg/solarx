import { Container, Grid } from "@mui/material";
import { GridItem, PageTitle, SectionButton } from "components";
import { useTranslation } from "react-i18next";
import { useIsLocal } from "hooks";

export default function AdminHomeTemplate() {
  const { t } = useTranslation();
  const isLocal = useIsLocal();

  return (
    <Container maxWidth="2xl">
      <PageTitle>{t("pages.admin.adminHome.title")}</PageTitle>
      <Grid container spacing={3}>
        <GridItem xs={6} sm={4} md={3}>
          <SectionButton
            title={t("projects.projects")}
            to="/admin/projects"
            emoji="💼"
          />
        </GridItem>
        <GridItem xs={6} sm={4} md={3}>
          <SectionButton
            title={t("common.investors")}
            to="/admin/investors"
            emoji="👥"
          />
        </GridItem>
        {isLocal && (
          <GridItem xs={6} sm={4} md={3}>
            <SectionButton
              title={t("projects.local")}
              to="/admin/local"
              emoji="📟"
            />
          </GridItem>
        )}
      </Grid>
    </Container>
  );
}
