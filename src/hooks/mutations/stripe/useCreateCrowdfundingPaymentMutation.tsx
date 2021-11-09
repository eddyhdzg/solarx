import { useFunctions } from "reactfire";
import { httpsCallable } from "firebase/functions";
import { useHandleCreateCrowdfundingPaymentProps } from "hooks";
import { PaymentIntentStatus } from "types";

export default function useCreateCrowdfundingPaymentMutation() {
  const functions = useFunctions();

  const createCrowdfundingPayment = httpsCallable<
    useHandleCreateCrowdfundingPaymentProps,
    PaymentIntentStatus
  >(functions, "createCrowdfundingPayment_v0");

  return createCrowdfundingPayment;
}
