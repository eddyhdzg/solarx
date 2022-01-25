import { doc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { UserWallet } from "solarx-types";

export default function useUserWallet(uid: string) {
  const firestore = useFirestore();
  const userWalletRef = doc(
    firestore,
    "users",
    uid,
    "privateUserData",
    "wallet"
  );

  return useFirestoreDocData<UserWallet>(userWalletRef, {
    initialData: null,
  });
}
