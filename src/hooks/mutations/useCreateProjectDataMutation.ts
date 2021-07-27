import { useFirestore } from "reactfire";
import { Project, Timestamp } from "types";
import { IProjectDataFormSchema } from "hooks";

export default function useCreateProjectDataMutation() {
  const projectsRef = useFirestore().collection("projects");
  const { serverTimestamp } = useFirestore.FieldValue;

  const createProjectDataMutation = ({
    state,
    ...data
  }: IProjectDataFormSchema) => {
    const project: Project = {
      ...data,
      created: serverTimestamp() as Timestamp,
      sharesSold: 0,
      state: state?.name,
      coverImage: null,
    };

    return projectsRef.add(project);
  };

  const editProjectDataMutation = (
    id: string | undefined,
    { state, ...formData }: IProjectDataFormSchema
  ) => {
    const project: Project = {
      ...formData,
      state: state?.name,
    };

    return projectsRef.doc(id).update(project);
  };

  return { createProjectDataMutation, editProjectDataMutation };
}
