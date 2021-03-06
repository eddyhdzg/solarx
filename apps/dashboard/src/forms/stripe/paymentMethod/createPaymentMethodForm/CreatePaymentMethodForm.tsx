import { StripeProvider } from "providers";
import { FormProvider } from "react-hook-form";
import {
  useCreatePaymentMethodForm,
  useHandleCreatePaymentMethod,
} from "hooks";
import ProjectCheckoutFormLayout from "../PaymentMethodFormLayout";

export default function WrappedCreatePaymentMethodForm() {
  return (
    <StripeProvider>
      <CreatePaymentMethodForm />
    </StripeProvider>
  );
}

function CreatePaymentMethodForm() {
  const form = useCreatePaymentMethodForm();
  const handleCreatePaymentMethod = useHandleCreatePaymentMethod();

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();
    handleCreatePaymentMethod(form.reset, values);
  });

  return (
    <FormProvider {...form}>
      <ProjectCheckoutFormLayout onSubmit={onSubmit} />
    </FormProvider>
  );
}
