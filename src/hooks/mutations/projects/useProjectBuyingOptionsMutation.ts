import { useFirestore } from "reactfire";
import { CreateBuyingOption, EditBuyingOption } from "types";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

export default function useProjectBuyingOptionsMutation() {
  const firestore = useFirestore();

  const createProjectBuyingOption = (
    projectId: string,
    values: CreateBuyingOption
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
    values: EditBuyingOption
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
