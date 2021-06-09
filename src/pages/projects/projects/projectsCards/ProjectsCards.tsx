import { ProjectCard } from "components";
import { Project } from "types";
import useStyles from "./projectsCards.jss";

interface IProjectsCardsProps {
  projects: Project[];
}

export default function ProjectsCards({ projects }: IProjectsCardsProps) {
  const classes = useStyles();

  return (
    <div className={classes.projects_cards}>
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
}
