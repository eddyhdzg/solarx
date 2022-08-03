import { doc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { InvestorWallet } from "solarx-types";
import { defaultUid, initialDocData } from "constant";

export default function useInvestorWallet(uid: string = defaultUid) {
  const firestore = useFirestore();
  const investorWalletRef = doc(
    firestore,
    "investors",
    uid,
    "privateInvestorData",
    "wallet"
  );
  return useFirestoreDocData<InvestorWallet>(investorWalletRef, {
    initialData: initialDocData,
  });
}
