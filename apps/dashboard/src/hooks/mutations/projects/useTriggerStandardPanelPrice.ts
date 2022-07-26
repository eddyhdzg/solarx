import { useFunctions } from "reactfire";
import { httpsCallable } from "firebase/functions";

export default function useTriggerStandardPanelPrice() {
  const functions = useFunctions();

  // FIXME
  const triggerStandardPricePanels = httpsCallable<{ id?: string }, boolean>(
    functions,
    "updateGeneralPriceQuantity_v0"
  );

  return triggerStandardPricePanels;
}
