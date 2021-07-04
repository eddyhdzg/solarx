import { useFirestore } from "reactfire";
import { Project } from "types";
import { useCreateProjectFormSchema } from "../forms/useCreateProjectForm";

export default function useProjectsMutations() {
  const projectsRef = useFirestore().collection("projects");
  const { serverTimestamp } = useFirestore.FieldValue;

  const createProject = ({ state, ...data }: useCreateProjectFormSchema) => {
    const project: Project = {
      ...data,
      created: serverTimestamp() as unknown as Date,
      coverImage: null,
      images: [],
      sharesSold: 0,
      state: state?.name,
    };

    return projectsRef.add(project);
  };

  return { createProject };
}
