import { useFunctions } from "reactfire";
import { httpsCallable } from "firebase/functions";
import { useHandleCreateCrowdfundingPaymentProps } from "hooks";
import { PaymentIntentRes } from "solarx-types";

export default function useCreateCrowdfundingPaymentMutation() {
  const functions = useFunctions();

  const createCrowdfundingPayment = httpsCallable<
    useHandleCreateCrowdfundingPaymentProps,
    PaymentIntentRes
  >(functions, "createCrowdfundingPayment_v0");

  return createCrowdfundingPayment;
}
