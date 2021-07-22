import { ProjectCard } from "components";
import { Row } from "react-table";
import { Project } from "types";
import ProjectsTablePagination from "../projectsTablePagination/ProjectsTablePagination";
import useStyles from "./projectsCards.jss";

interface IProjectsCardsProps {
  page: Row<Project>[];
}

export default function ProjectsCards({
  page: projects,
  ...table
}: IProjectsCardsProps) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.projects_cards}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project.original} />
        ))}
      </div>
      <div className={classes.projects_pagination}>
        <ProjectsTablePagination {...table} />
      </div>
    </>
  );
}
