import { FormProvider } from "react-hook-form";
import { useEditInvestorForm, useHandleEditInvestorForm } from "hooks";
import AccountInformationFormLayout from "./AccountInformationFormLayout";

export default function AccountInformationForm() {
  const form = useEditInvestorForm();
  const onSubmit = useHandleEditInvestorForm(
    form.formState,
    form.handleSubmit,
    form.reset
  );

  return (
    <FormProvider {...form}>
      <AccountInformationFormLayout onSubmit={onSubmit} />
    </FormProvider>
  );
}
