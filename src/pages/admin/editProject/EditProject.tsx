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
import { useTranslation } from "react-i18next";

interface ProjectID {
  id?: string;
}

export default function EditPorjectPage() {
  const { t } = useTranslation();
  const { onChangeRoute } = useHeader();

  useEffect(() => {
    onChangeRoute({ text: t("router.projects"), url: "/admin/projects" });
  }, [onChangeRoute, t]);

  return (
    <>
      <Seo
        title={t("pages.admin.editProject.editProject")}
        description={t("pages.admin.editProject.editProjectDescription")}
      />
      <PageTitle>{t("pages.admin.editProject.editProject")}</PageTitle>
      <EditProject />
    </>
  );
}

function EditProject() {
  const { t } = useTranslation();
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

    let dataPromise;
    let mediaPromise;

    if (Object.keys(dirtyDataValues).length) {
      dataPromise = editProjectDataMutation(id || "", dirtyDataValues)
        .then(() => {
          enqueueSnackbar(t("snackbar.projectEdited"), { variant: "success" });
        })
        .catch(() => {
          enqueueSnackbar(t("snackbar.projectNotEdited"), { variant: "error" });
        });
    }

    if (Object.keys(dirtyMediaValues).length) {
      mediaPromise = editProjectMediaMutation(id, dirtyMediaValues)
        .then(() => {
          enqueueSnackbar(t("snackbar.mediaEdited"), { variant: "success" });
        })
        .catch(() => {
          enqueueSnackbar(t("snackbar.mediaNotEdited"), { variant: "error" });
        });
    }

    Promise.all([dataPromise, mediaPromise]).finally(() => {
      methods.reset({}, { keepValues: true });
    });
  });

  return (
    <FormProvider {...methods}>
      <ProjectForm onSubmit={onSubmit} title="Edit" />
    </FormProvider>
  );
}
