import { useTranslation } from "react-i18next";
import { PageTitle, ProjectsTableLayout } from "components";
import { Container } from "@mui/material";
import { ProjectSection } from "solarx-types";
import { useProjectsTable, usePrivateProjects } from "hooks";

export default function AdminProjectsTemplate() {
  const { t } = useTranslation();
  const section: ProjectSection = "admin/projects";
  const { data } = usePrivateProjects();
  const projectsTable = useProjectsTable({ data, section });

  return (
    <Container maxWidth="2xl">
      <PageTitle>{t("pages.admin.projects.title")}</PageTitle>
      <ProjectsTableLayout table={projectsTable} section={section} />
    </Container>
  );
}
