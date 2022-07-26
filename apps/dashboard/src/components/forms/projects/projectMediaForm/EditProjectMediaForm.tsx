import { useEditProjectMediaForm, useHandleEditProjectMediaForm } from "hooks";
import { FormProvider } from "react-hook-form";
import EditProjectMediaFormLayout from "./editProjectMediaFormLayout/EditProjectMediaFormLayout";

export default function EditProjectMediaForm() {
  const form = useEditProjectMediaForm();
  const onSubmit = useHandleEditProjectMediaForm(
    form.formState,
    form.handleSubmit,
    form.reset
  );

  return (
    <FormProvider {...form}>
      <EditProjectMediaFormLayout onSubmit={onSubmit} />
    </FormProvider>
  );
}
