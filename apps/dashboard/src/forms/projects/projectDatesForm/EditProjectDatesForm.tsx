import { useEditProjectDatesForm, useHandleEditProjectDatesForm } from "hooks";
import { FormProvider } from "react-hook-form";
import EditProjectDatesFormLayout from "./editProjectDatesFormLayout/EditProjectDatesFormLayout";

export default function EditProjectDatesForm() {
  const form = useEditProjectDatesForm();
  const onSubmit = useHandleEditProjectDatesForm(
    form.formState,
    form.handleSubmit,
    form.reset
  );

  return (
    <FormProvider {...form}>
      <EditProjectDatesFormLayout onSubmit={onSubmit} />
    </FormProvider>
  );
}
