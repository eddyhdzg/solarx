import { useEffect } from "react";
import {
  useEditProjectMediaForm,
  useEditProjectMediaMutation,
  useProject,
  IProjectMediaSchema,
  projectMediaDefaultValues,
} from "hooks";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import ProjectMediaForm from "./ProjectMediaForm";
import { useParams } from "react-router-dom";
import { getDirtyValues } from "utils";

interface ProjectID {
  id?: string;
}

export default function EditProjectMediaFormContext() {
  const form = useEditProjectMediaForm();
  const { t } = useTranslation();
  const { id } = useParams<ProjectID>();
  const { data, status } = useProject(id || "");
  const editProjectMediaMutation = useEditProjectMediaMutation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    // @ts-ignore
    const defaultValues: IProjectMediaSchema = !data
      ? projectMediaDefaultValues
      : {
          coverImage: data?.coverImage,
          images: data?.images,
        };

    form.reset(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, data]);

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      form?.formState?.dirtyFields,
      values
    ) as IProjectMediaSchema;

    editProjectMediaMutation(data.id || "", dirtyValues)
      .then(() => {
        enqueueSnackbar(t("snackbar.projectEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotEdited"), { variant: "error" });
      });
  });

  return (
    <FormProvider {...form}>
      <ProjectMediaForm onSubmit={onSubmit} />
    </FormProvider>
  );
}
