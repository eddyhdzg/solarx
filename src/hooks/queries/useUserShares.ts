import { collection, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { UserShare } from "types";

export default function useUserShares(uid: string) {
  const firestore = useFirestore();
  const userSharesRef = collection(firestore, "users", uid, "userShares");
  const userSharesQuery = query(userSharesRef, orderBy("roi", "desc"));

  return useFirestoreCollectionData<UserShare>(userSharesQuery, {
    initialData: [],
    idField: "id",
  });
}
