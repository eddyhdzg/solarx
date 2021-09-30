import { useEffect } from "react";
import { Seo, PageTitle } from "components";
import {
  IProjectDataFormSchema,
  IProjectFormSchema,
  IProjectMediaFormSchema,
  useHeader,
} from "hooks";
import {
  useCreateProjectDataForm,
  useCreateProjectDataMutation,
  useCreateProjectMediaMutation,
} from "hooks";
import ProjectForm from "forms/projectForm/ProjectForm";
import { useSnackbar } from "notistack";
import { FormProvider, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { getDirtyValues } from "utils";

export default function CreateProjectPage() {
  const { t } = useTranslation();
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: t("router.projects"), url: "/admin/projects" });
  }, [onChangeRoute, t]);
  return (
    <>
      <Seo
        title={t("pages.admin.createProject.title")}
        description={t("pages.admin.createProject.description")}
      />
      <PageTitle>{t("pages.admin.createProject.title")}</PageTitle>
      <CreateProject />
    </>
  );
}

function CreateProject() {
  const { t } = useTranslation();
  const methods = useCreateProjectDataForm();
  const { createProjectDataMutation } = useCreateProjectDataMutation();
  const { createProjectMediaMutation } = useCreateProjectMediaMutation();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit: SubmitHandler<IProjectFormSchema> = (values, e) => {
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

    createProjectDataMutation(dirtyDataValues)
      .then((res) => {
        enqueueSnackbar(t("snackbar.projectAdded"), { variant: "success" });

        if (Object.keys(dirtyMediaValues).length) {
          createProjectMediaMutation(res.id, dirtyMediaValues)
            .then(() => {
              enqueueSnackbar(t("snackbar.mediaAdded"), { variant: "success" });
            })
            .catch(() => {
              enqueueSnackbar(t("snackbar.mediaNotAdded"), {
                variant: "error",
              });
            })
            .finally(() => {
              methods.reset();
            });
        } else {
          methods.reset();
        }
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotAdded"), { variant: "error" });
      });

    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <ProjectForm onSubmit={methods.handleSubmit(onSubmit)} title="Create" />
    </FormProvider>
  );
}
