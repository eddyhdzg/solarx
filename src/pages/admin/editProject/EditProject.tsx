import { useEditProjectForm, useProject } from "hooks";
import { useEffect } from "react";
import {
  editProjectDefaultValues,
  useEditProjectFormSchema,
} from "hooks/forms/schema.project";
import ProjectForm from "../forms/projectForm/ProjectForm";
import { mexicanStates } from "constant";
import { useParams } from "react-router-dom";

interface ProjectID {
  id?: string;
}

export default function EditProject() {
  const { id } = useParams<ProjectID>();
  const { data, status } = useProject(id);

  const {
    control,
    watch,
    setValue,
    formState,
    trigger,
    clearErrors,
    onSubmit,
    reset,
  } = useEditProjectForm(data.id);

  useEffect(() => {
    const defaultValues: useEditProjectFormSchema = !data
      ? editProjectDefaultValues
      : {
          name: data?.name,
          state:
            mexicanStates.find((element) => {
              return element.name === data?.state;
            }) || null,
          city: data?.city,
          company: data?.company,
          businessType: data?.businessType,
          ror: data?.ror,
          sharePrice: data?.sharePrice,
          totalShares: data?.totalShares,
          ppa: data?.ppa,
          softDelete: data?.softDelete,
        };

    reset(defaultValues);
  }, [status, reset, data]);

  return (
    <ProjectForm
      control={control}
      watch={watch}
      setValue={setValue}
      formState={formState}
      trigger={trigger}
      clearErrors={clearErrors}
      onSubmit={onSubmit}
      title="Edit"
    />
  );
}
