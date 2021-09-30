import { ProjectCard, CustomTablePagination } from "components";
import { Row } from "react-table";
import { Project, ProjectSection } from "types";
import { ProjectCardsGird, PaginationContainer } from "./ProjectCards.styled";

interface IProjectCardsProps {
  page: Row<Project>[];
  rows: any;
  gotoPage: any;
  setPageSize: any;
  state: any;
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
            {...project.original}
            url={`/${section}/${project.original.id}`}
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
