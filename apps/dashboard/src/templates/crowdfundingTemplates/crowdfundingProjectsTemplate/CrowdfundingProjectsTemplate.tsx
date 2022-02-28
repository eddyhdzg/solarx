import { useTranslation } from "react-i18next";
import { ProjectsTableLayout } from "tables";
import { PageTitle } from "components";
import { Container } from "@mui/material";
import { ProjectSection } from "solarx-types";
import { useProjectsTable, usePublicProjects } from "hooks";

export default function CrowdfundingProjectsTemplate() {
  const { t } = useTranslation();
  const section: ProjectSection = "crowdfunding";
  const { data } = usePublicProjects();
  const table = useProjectsTable({ data, section });
  return (
    <Container disableGutters maxWidth="xl">
      <PageTitle>
        {t("pages.crowdfunding.projects.crowdfundingProjects")}
      </PageTitle>
      <ProjectsTableLayout table={table} section={section} />
    </Container>
  );
}
