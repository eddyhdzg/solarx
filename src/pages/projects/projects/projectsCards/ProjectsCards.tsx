import { ProjectCard } from "components";
import { Row } from "react-table";
import { Project } from "types";
import useStyles from "./projectsCards.jss";

interface IProjectsCardsProps {
  projects: Row<Project>[];
}

export default function ProjectsCards({ projects }: IProjectsCardsProps) {
  const classes = useStyles();

  return (
    <div className={classes.projects_cards}>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project.original} />
      ))}
    </div>
  );
}
