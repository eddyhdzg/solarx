import { useEffect } from "react";
import { Seo, PageTitle } from "components";
import { useHeader } from "hooks";
import {
  useCreateProjectDataForm,
  useCreateProjectDataMutation,
  useCreateProjectMediaMutation,
} from "hooks";
import ProjectForm from "forms/projectForm/ProjectForm";
import { useSnackbar } from "notistack";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";

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

  const onSubmit = methods.handleSubmit((data, createDataEvent) => {
    createDataEvent?.preventDefault();

    const { coverImage, images, ...createProjectData } = data;

    createProjectDataMutation(createProjectData)
      .then((res) => {
        enqueueSnackbar(t("snackbar.projectAdded"), { variant: "success" });

        if (coverImage?.length || images?.length) {
          createProjectMediaMutation(res.id, { coverImage, images })
            .then(() => {
              enqueueSnackbar(t("snackbar.mediaAdded"), { variant: "success" });
            })
            .catch(() => {
              enqueueSnackbar(t("snackbar.mediaNotAdded"), {
                variant: "error",
              });
            })
            .finally(() => {
              methods.reset(
                {},
                {
                  keepDefaultValues: true,
                  keepTouched: false,
                }
              );
            });
        } else {
          methods.reset(
            {},
            {
              keepDefaultValues: true,
              keepTouched: false,
            }
          );
        }
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotAdded"), { variant: "error" });
      });
  });

  return (
    <FormProvider {...methods}>
      <ProjectForm onSubmit={onSubmit} title="Create" />
    </FormProvider>
  );
}
