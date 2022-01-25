import { FormProvider } from "react-hook-form";
import CreateCrowdfundingPaymentFormLayout from "../CreateCrowdfundingPaymentFormLayout";
import { useCreateCrowdfundingPayment } from "hooks";

export default function CreateCrowdfundingPayment() {
  const form = useCreateCrowdfundingPayment();

  return (
    <FormProvider {...form}>
      <CreateCrowdfundingPaymentFormLayout />
    </FormProvider>
  );
}
