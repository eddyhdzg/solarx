import { useFirestore } from "reactfire";
import { Project, TTimestamp } from "types";
import { IProjectGeneralSchema } from "hooks";
import {
  collection,
  serverTimestamp,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export default function useProjectGeneralMutation() {
  const firestore = useFirestore();
  const projectsCollection = collection(firestore, "projects");

  const createProjectGeneralMutation = ({
    state,
    ...data
  }: IProjectGeneralSchema) => {
    const project: Project = {
      coverImage: null,
      created: serverTimestamp() as TTimestamp,
      fundedDate: null,
      goal: 1,
      images: [],
      investors: 0,
      operationDate: null,
      ppa: 0,
      releaseDate: null,
      roi: 0,
      sharePrice: 1,
      sharesSold: 0,
      state: state?.name,
      totalShares: 1,
      lastUpdate: serverTimestamp() as TTimestamp,
      ...data,
    };

    return addDoc(projectsCollection, project);
  };

  const editProjectGeneralMutation = (
    id: string,
    { state, ...data }: IProjectGeneralSchema
  ) => {
    const project: Project = {
      ...data,
      ...(state && { state: state?.name }),
    };
    const projectDocRef = doc(firestore, "projects", id);
    return updateDoc(projectDocRef, {
      ...project,
      lastUpdate: serverTimestamp(),
    });
  };

  return { createProjectGeneralMutation, editProjectGeneralMutation };
}
