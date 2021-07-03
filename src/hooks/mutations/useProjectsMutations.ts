import { useFirestore } from "reactfire";
import { Project } from "types";

export default function useProjectsMutations() {
  const projectsRef = useFirestore().collection("newProjects");

  const createProject = (project: Project) => {
    return projectsRef.add(project);
  };

  return { createProject };
}
