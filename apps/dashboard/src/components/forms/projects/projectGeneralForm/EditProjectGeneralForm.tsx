import {
  useEditProjectGeneralForm,
  useHandleEditProjectGeneralForm,
} from "hooks";
import { FormProvider } from "react-hook-form";
import ProjectGeneralFormLayout from "./editProjectGeneralFormLayout/EditProjectGeneralFormLayout";

export default function EditProjectGeneralForm() {
  const form = useEditProjectGeneralForm();
  const onSubmit = useHandleEditProjectGeneralForm(
    form.formState,
    form.handleSubmit,
    form.reset
  );

  return (
    <FormProvider {...form}>
      <ProjectGeneralFormLayout onSubmit={onSubmit} />
    </FormProvider>
  );
}
