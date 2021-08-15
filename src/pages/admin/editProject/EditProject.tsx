import {
  IProjectDataFormSchema,
  IProjectMediaFormSchema,
  useEditProjectForm,
  useProject,
} from "hooks";
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
import { getDirtyValues } from "utils";

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
          coverImage: data?.coverImage ? [data?.coverImage] : [],
          images: data?.images?.length ? data?.images : [],
        };

    methods.reset(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, data]);

  console.log(methods.watch("coverImage"));

  const { editProjectDataMutation } = useCreateProjectDataMutation();
  const { editProjectMediaMutation } = useCreateProjectMediaMutation();
  const { enqueueSnackbar } = useSnackbar();

  console.log(methods.watch("coverImage"));

  const onSubmit = methods.handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyDataValues = getDirtyValues(
      methods?.formState?.dirtyFields,
      values,
      [],
      ["coverImage", "images"]
    ) as IProjectDataFormSchema;

    const dirtyMediaValues = getDirtyValues(
      methods?.formState?.dirtyFields,
      values,
      ["coverImage", "images"],
      []
    ) as IProjectMediaFormSchema;

    if (Object.keys(dirtyDataValues).length) {
      editProjectDataMutation(id, dirtyDataValues)
        .then(() => {
          enqueueSnackbar("Project Edited! 🔥", { variant: "success" });
          methods.reset({}, { keepValues: true });
        })
        .catch(() => {
          enqueueSnackbar("Project Edited Error 😔", { variant: "error" });
        });
    }

    if (Object.keys(dirtyMediaValues).length) {
      editProjectMediaMutation(id, { ...dirtyMediaValues })
        .then(() => {
          enqueueSnackbar("Media Edited! 🔥", { variant: "success" });
          methods.reset({}, { keepValues: true });
        })
        .catch(() => {
          enqueueSnackbar("Media Edited Error 😔", { variant: "error" });
        });
    }
  });

  return (
    <FormProvider {...methods}>
      <ProjectForm onSubmit={onSubmit} title="Edit" />
    </FormProvider>
  );
}
