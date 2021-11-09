import { doc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { UserPrivateData } from "types";

export default function useUserPrivateData(uid: string) {
  const firestore = useFirestore();
  const userPrivateUserDataRef = doc(
    firestore,
    "users",
    uid,
    "privateUserData",
    "data"
  );

  return useFirestoreDocData<UserPrivateData>(userPrivateUserDataRef, {
    initialData: null,
  });
}
