import { usePrivateProjects, useProjectsTable } from "hooks";
import { ProjectsTableLayout } from "tables";
import { ProjectSection } from "solarx-types";

export default function AdminProjectsTemplate() {
  const section: ProjectSection = "admin/projects";
  const { data } = usePrivateProjects();
  const table = useProjectsTable({ data, section });

  return <ProjectsTableLayout table={table} section={section} />;
}
