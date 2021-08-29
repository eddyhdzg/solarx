import { useFirestore } from "reactfire";
import { Project, Timestamp } from "types";
import { IProjectDataFormSchema } from "hooks";
import {
  collection,
  serverTimestamp,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export default function useCreateProjectDataMutation() {
  const firestore = useFirestore();
  const projectsCollection = collection(firestore, "projects");

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
      images: [],
    };

    return addDoc(projectsCollection, project);
  };

  const editProjectDataMutation = (
    id: string,
    { state, ...formData }: IProjectDataFormSchema
  ) => {
    const project: Project = {
      ...formData,
      ...(state && { state: state?.name }),
    };

    const projectDocRef = doc(firestore, "projects", id);

    return updateDoc(projectDocRef, { project });
  };

  return { createProjectDataMutation, editProjectDataMutation };
}
