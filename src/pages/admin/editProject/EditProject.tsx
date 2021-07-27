import { useEditProjectForm, useProject } from "hooks";
import { useEffect } from "react";
import {
  projectFormDefaultValues,
  IProjectFormSchema,
  useCreateProjectDataMutation,
  useCreateProjectMediaMutation,
} from "hooks";
import ProjectForm from "../forms/projectForm/ProjectForm";
import { mexicanStates } from "constant";
import { useParams } from "react-router-dom";
import { FormProvider } from "react-hook-form";
import { useSnackbar } from "notistack";

interface ProjectID {
  id?: string;
}

export default function EditProject() {
  const { id } = useParams<ProjectID>();
  const { data, status } = useProject(id);
  const methods = useEditProjectForm();

  useEffect(() => {
    const defaultValues: IProjectFormSchema = !data
      ? projectFormDefaultValues
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
          coverImage: null,
        };

    methods.reset(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, data]);

  const { editProjectDataMutation } = useCreateProjectDataMutation();
  const { editProjectMediaMutation } = useCreateProjectMediaMutation();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = methods.handleSubmit(({ coverImage, ...rest }, e) => {
    e?.preventDefault();

    editProjectDataMutation(id, rest)
      .then(() => {
        enqueueSnackbar("Project Edited! 🔥", { variant: "success" });
        methods.reset({}, { keepValues: true });
      })
      .catch(() => {
        enqueueSnackbar("Project Edited Error 😔", { variant: "error" });
      });

    editProjectMediaMutation(id, { coverImage })
      .then(() => {
        enqueueSnackbar("Media Edited! 🔥", { variant: "success" });
        methods.reset({}, { keepValues: true });
      })
      .catch(() => {
        enqueueSnackbar("Media Edited 😔", { variant: "error" });
      });
  });

  console.log(status);

  return (
    <FormProvider {...methods}>
      <ProjectForm onSubmit={onSubmit} title="Edit" />
    </FormProvider>
  );
}
