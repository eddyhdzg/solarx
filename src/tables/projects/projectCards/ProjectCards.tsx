import { ProjectCard } from "components";
import { Row } from "react-table";
import { Project, ProjectSection } from "types";
import ProjectsTablePagination from "../projectsTablePagination/ProjectsTablePagination";
import useStyles from "./projectCards.jss";

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
  const classes = useStyles();

  return (
    <>
      <div className={classes.projects_cards}>
        {projects.map((project) => (
          <ProjectCard
            key={project.original.id}
            {...project.original}
            url={`/${section}/${project.original.id}`}
          />
        ))}
      </div>
      <div className={classes.projects_pagination}>
        <ProjectsTablePagination
          component="div"
          rows={rows}
          gotoPage={gotoPage}
          setPageSize={setPageSize}
          state={state}
        />
      </div>
    </>
  );
}
