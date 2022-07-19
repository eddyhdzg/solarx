import { FormProvider } from "react-hook-form";
import { useCreateCrowdfundingPayment } from "hooks";
import CreateCrowdfundingPaymentFormLayout from "./createCrowdfundingPaymentFormLayout/CreateCrowdfundingPaymentFormLayout";

export default function CreateCrowdfundingPaymentForm() {
  const form = useCreateCrowdfundingPayment();

  return (
    <FormProvider {...form}>
      <CreateCrowdfundingPaymentFormLayout />
    </FormProvider>
  );
}
