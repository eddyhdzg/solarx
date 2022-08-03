import { useFirestore } from "reactfire";
import { Investor } from "solarx-types";
import { doc, updateDoc } from "firebase/firestore";

export default function useEditInvestorMutation() {
  const firestore = useFirestore();

  const editInvestorMutation = (id: string, data?: Investor) => {
    const investorRef = doc(firestore, "investors", id);
    return updateDoc(investorRef, { ...data });
  };

  return editInvestorMutation;
}
