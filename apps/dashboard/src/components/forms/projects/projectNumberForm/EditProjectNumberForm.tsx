import { FormProvider } from "react-hook-form";
import {
  useEditProjectNumberForm,
  useHandleEditProjectNumberForm,
} from "hooks";
import ProjectNumberFormLayout from "./projectNumberFormLayout/ProjectNumberFormLayout";

export default function EditProjectNumberForm() {
  const form = useEditProjectNumberForm();
  const onSubmit = useHandleEditProjectNumberForm(
    form.formState,
    form.handleSubmit,
    form.reset
  );

  return (
    <FormProvider {...form}>
      <ProjectNumberFormLayout onSubmit={onSubmit} />
    </FormProvider>
  );
}
