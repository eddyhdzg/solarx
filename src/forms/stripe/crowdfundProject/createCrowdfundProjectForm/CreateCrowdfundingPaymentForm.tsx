import { ProjectIDParams } from "types";
import { useParams } from "react-router-dom";
import { FormProvider } from "react-hook-form";
import CreateCrowdfundingPaymentFormLayout from "../CreateCrowdfundingPaymentFormLayout";
import {
  useCreateCrowdfundingPayment,
  useHandleCreateCrowdfundingPayment,
  useQueryParams,
} from "hooks";

export default function CreateCrowdfundingPayment() {
  const form = useCreateCrowdfundingPayment();
  const handleCreateCrowdfundingPayment = useHandleCreateCrowdfundingPayment();
  const { id } = useParams<ProjectIDParams>();
  const { pid = "", qty = "0" } = useQueryParams() as {
    pid: string;
    qty: string;
  };

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();
    handleCreateCrowdfundingPayment({
      payment_method: values.paymentMethod,
      priceId: pid,
      projectId: id,
      qty: Number(qty),
    });
  });

  return (
    <FormProvider {...form}>
      <CreateCrowdfundingPaymentFormLayout onSubmit={onSubmit} />
    </FormProvider>
  );
}
