import { collection, query, where, orderBy, limit } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { UserHistory } from "types";

export default function useLastUserMonthlyRevenue(uid: string) {
  const firestore = useFirestore();
  const userHistoryRef = collection(firestore, "users", uid, "userHistory");
  const userLastHistoryQuery = query(
    userHistoryRef,
    where("title", "==", "Monthly revenue"),
    orderBy("date", "desc"),
    limit(1)
  );

  const { data, ...rest } = useFirestoreCollectionData<UserHistory>(
    userLastHistoryQuery,
    {
      idField: "id",
      initialData: null,
    }
  );

  return { data: data && data.length ? data[0] : null, ...rest };
}
