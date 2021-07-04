import { useFirestore } from "reactfire";
import { Project } from "types";
import { useCreateProjectFormSchema } from "../forms/schema.project";

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
      softDelete: false,
    };

    return projectsRef.add(project);
  };

  const editProject = (
    id: string | undefined,
    { state, ...data }: useCreateProjectFormSchema
  ) => {
    const project: Project = {
      ...data,
      state: state?.name,
    };

    return projectsRef.doc(id).update(project);
  };

  return { createProject, editProject };
}
