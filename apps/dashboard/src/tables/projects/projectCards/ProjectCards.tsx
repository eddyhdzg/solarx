import { ProjectCard, CustomTablePagination } from "components";
import { TableInstance } from "react-table";
import { Project, ProjectSection } from "solarx-types";
import { ProjectCardsGird, PaginationContainer } from "./ProjectCards.styled";

interface IProjectCardsProps extends TableInstance<Project> {
  section: ProjectSection;
}

export default function ProjectCards({
  page: projects,
  rows,
  gotoPage,
  setPageSize,
  state,
  section = "crowdfunding",
}: IProjectCardsProps) {
  return (
    <>
      <ProjectCardsGird>
        {projects.map((project) => (
          <ProjectCard
            key={project.original.id}
            url={`/${section}/${project.original.id}`}
            {...project.original}
          />
        ))}
      </ProjectCardsGird>
      <PaginationContainer>
        <CustomTablePagination
          component="div"
          rows={rows}
          gotoPage={gotoPage}
          setPageSize={setPageSize}
          state={state}
          actionType="PROJECTS_CHANGE_PAGESIZE"
        />
      </PaginationContainer>
    </>
  );
}
