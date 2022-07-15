import {
  useEditProjectContentForm,
  useHandleEditProjectContentForm,
} from "hooks";
import { FormProvider } from "react-hook-form";
import ProjectContentFormLayout from "./editProjectContentFormLayout/EditProjectContentFormLayout";

export default function EditProjectContentForm() {
  const form = useEditProjectContentForm();
  const onSubmit = useHandleEditProjectContentForm(
    form.formState,
    form.handleSubmit,
    form.reset
  );

  return (
    <FormProvider {...form}>
      <ProjectContentFormLayout onSubmit={onSubmit} />
    </FormProvider>
  );
}
