import { useFirestore } from "reactfire";

import {
  collection,
  addDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import {
  ICreateProjectBuyingOptionSchema,
  IEditProjectBuyingOptionSchema,
} from "hooks";

export default function useProjectBuyingOptionsMutation() {
  const firestore = useFirestore();

  const createProjectBuyingOption = (
    projectId: string,
    values: ICreateProjectBuyingOptionSchema
  ) => {
    const projectBuyingOptionsRef = collection(
      firestore,
      "projects",
      projectId,
      "buyingOptions"
    );
    return addDoc(projectBuyingOptionsRef, {
      investors: 0,
      sharesSold: 0,
      ...values,
      lastUpdate: serverTimestamp(),
    });
  };

  const editProjectBuyingOption = (
    projectId: string,
    buyingOptionId: string,
    values: IEditProjectBuyingOptionSchema
  ) => {
    const projectBuyingOptionsDocRef = doc(
      firestore,
      "projects",
      projectId,
      "buyingOptions",
      buyingOptionId
    );
    return updateDoc(projectBuyingOptionsDocRef, {
      ...values,
      lastUpdate: serverTimestamp(),
    });
  };

  return { createProjectBuyingOption, editProjectBuyingOption };
}
