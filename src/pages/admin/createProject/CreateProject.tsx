import { useCreateProjectForm } from "hooks";
import ProjectForm from "../forms/projectForm/ProjectForm";

export default function CreateProject() {
  const {
    control,
    watch,
    setValue,
    formState,
    trigger,
    clearErrors,
    onSubmit,
  } = useCreateProjectForm();

  return (
    <ProjectForm
      control={control}
      watch={watch}
      setValue={setValue}
      formState={formState}
      trigger={trigger}
      clearErrors={clearErrors}
      onSubmit={onSubmit}
      title="Create"
    />
  );
}
