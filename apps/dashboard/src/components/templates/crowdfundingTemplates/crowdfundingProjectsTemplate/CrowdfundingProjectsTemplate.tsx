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
  const projectsTable = useProjectsTable({ data, section });

  return (
    <Container maxWidth="2xl">
      <PageTitle>
        {t("pages.crowdfunding.projects.crowdfundingProjects")}
      </PageTitle>
      <ProjectsTableLayout table={projectsTable} section={section} />
    </Container>
  );
}
