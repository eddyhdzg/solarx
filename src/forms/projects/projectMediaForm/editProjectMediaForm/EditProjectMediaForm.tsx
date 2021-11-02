import { useEffect } from "react";
import {
  useEditProjectMediaForm,
  useEditProjectMediaMutation,
  useProject,
  IEditProjectMediaSchema,
  editProjectMediaDefaultValues,
} from "hooks";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";
import { getDirtyValues } from "utils";
import { ProjectIDParams } from "types";
import ProjectMediaFormLayout from "../ProjectMediaFormLayout";

export default function EditProjectMediaForm() {
  const { reset, ...form } = useEditProjectMediaForm();
  const { t } = useTranslation();
  const { id } = useParams<ProjectIDParams>();
  const { data, status } = useProject(id || "");
  const editProjectMediaMutation = useEditProjectMediaMutation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    // @ts-ignore
    const defaultValues: IEditProjectMediaSchema = !data
      ? editProjectMediaDefaultValues
      : {
          coverImage: data?.coverImage,
          images: data?.images,
        };

    reset(defaultValues);
  }, [status, data, reset]);

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      form?.formState?.dirtyFields,
      values
    ) as IEditProjectMediaSchema;

    editProjectMediaMutation(data.id || "", dirtyValues)
      .then(() => {
        enqueueSnackbar(t("snackbar.projectEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotEdited"), { variant: "error" });
      });
  });

  return (
    <FormProvider reset={reset} {...form}>
      <ProjectMediaFormLayout onSubmit={onSubmit} />
    </FormProvider>
  );
}
