import { useEffect } from "react";
import {
  useHeader,
  IProjectDataFormSchema,
  IProjectMediaFormSchema,
  useEditProjectForm,
  useProject,
  projectFormDefaultValues,
  IProjectFormSchema,
  useCreateProjectDataMutation,
  useCreateProjectMediaMutation,
} from "hooks";
import ProjectForm from "forms/projectForm/ProjectForm";
import { mexicanStates } from "constant";
import { useParams } from "react-router-dom";
import { FormProvider } from "react-hook-form";
import { useSnackbar } from "notistack";
import { getDirtyValues } from "utils";
import { Seo, PageTitle } from "components";

interface ProjectID {
  id?: string;
}

export default function EditPorjectPage() {
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: "projects", url: "/admin/projects" });
  }, [onChangeRoute]);

  return (
    <>
      <Seo title="Edit project" description="Edit a crowdfunding project." />
      <PageTitle>Edit project</PageTitle>
      <EditProject />
    </>
  );
}

function EditProject() {
  const { id } = useParams<ProjectID>();
  const { data, status } = useProject(id || "");
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
          roi: data?.roi,
          sharePrice: data?.sharePrice,
          totalShares: data?.totalShares,
          ppa: data?.ppa,
          archived: data?.archived,
          coverImage: data?.coverImage ? [data?.coverImage] : [],
          images: data?.images ? data?.images : [],
        };

    methods.reset(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, data]);

  const { editProjectDataMutation } = useCreateProjectDataMutation();
  const { editProjectMediaMutation } = useCreateProjectMediaMutation();
  const { enqueueSnackbar } = useSnackbar();

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
      editProjectDataMutation(id || "", dirtyDataValues)
        .then(() => {
          enqueueSnackbar("Project Edited! 🔥", { variant: "success" });
          methods.reset({}, { keepValues: true });
        })
        .catch(() => {
          enqueueSnackbar("Project Edited Error 😔", { variant: "error" });
        });
    }

    if (Object.keys(dirtyMediaValues).length) {
      editProjectMediaMutation(id, dirtyMediaValues)
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
