import { useTranslation } from "react-i18next";
import { ProjectsTableLayout } from "tables";
import { PageTitle } from "atomic";
import { Container } from "@mui/material";
import { ProjectSection } from "solarx-types";
import { useProjectsTable, usePrivateProjects } from "hooks";

export default function AdminProjectsTemplate() {
  const { t } = useTranslation();
  const section: ProjectSection = "admin/projects";
  const { data } = usePrivateProjects();
  const table = useProjectsTable({ data, section });

  return (
    <Container maxWidth="xl">
      <PageTitle>
        {t("pages.crowdfunding.projects.crowdfundingProjects")}
      </PageTitle>
      <ProjectsTableLayout table={table} section={section} />
    </Container>
  );
}
