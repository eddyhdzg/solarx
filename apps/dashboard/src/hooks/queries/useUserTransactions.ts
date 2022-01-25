import {
  collection,
  orderBy,
  OrderByDirection,
  query,
} from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { UserTransaction } from "solarx-types";

export default function useUserTransactions(
  uid: string,
  directionStr: OrderByDirection = "desc"
) {
  const firestore = useFirestore();
  const userTransactionsRef = collection(
    firestore,
    "users",
    uid,
    "userTransactions"
  );
  const userTransactionsQuery = query(
    userTransactionsRef,
    orderBy("date", directionStr)
  );

  return useFirestoreCollectionData<UserTransaction>(userTransactionsQuery, {
    initialData: [],
    idField: "id",
  });
}
