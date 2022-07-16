import { useFunctions } from "reactfire";
import { httpsCallable } from "firebase/functions";

export default function useTriggerStandardPriceShares() {
  const functions = useFunctions();

  const triggerStandardPriceShares = httpsCallable<{ id?: string }, boolean>(
    functions,
    "updateGeneralPriceQuantity_v0"
  );

  return triggerStandardPriceShares;
}
