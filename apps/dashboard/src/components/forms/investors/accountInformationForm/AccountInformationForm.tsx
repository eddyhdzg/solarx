import { FormProvider } from "react-hook-form";
import { useEditUserForm, useHandleEditInvestorForm } from "hooks";
import AccountInformationFormLayout from "./AccountInformationFormLayout";

export default function AccountInformationForm() {
  const form = useEditUserForm();
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
