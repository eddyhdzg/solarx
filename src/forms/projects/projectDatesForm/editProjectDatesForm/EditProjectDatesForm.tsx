import { useEffect } from "react";
import {
  IEditProjectDatesSchema,
  useProject,
  useEditProjectDatesForm,
  editProjectDatesDefaultValues,
  useEditProjectDatesMutation,
} from "hooks";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";
import { getDirtyValues } from "utils";
import { ProjectIDParams } from "types";
import ProjectDatesFormLayout from "../ProjectDatesFormLayout";

export default function EditProjectDatesForm() {
  const { reset, ...form } = useEditProjectDatesForm();
  const { t } = useTranslation();
  const { id } = useParams<ProjectIDParams>();
  const { data, status } = useProject(id || "");
  const editProjectDatesMutation = useEditProjectDatesMutation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const defaultValues: IEditProjectDatesSchema = !data
      ? editProjectDatesDefaultValues
      : {
          fundedDate: data?.fundedDate?.toDate() || null,
          releaseDate: data?.releaseDate?.toDate() || null,
          operationDate: data?.operationDate?.toDate() || null,
        };

    reset(defaultValues);
  }, [status, data, reset]);

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      form?.formState?.dirtyFields,
      values
    ) as IEditProjectDatesSchema;

    editProjectDatesMutation(data.id || "", dirtyValues)
      .then(() => {
        enqueueSnackbar(t("snackbar.projectEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotEdited"), { variant: "error" });
      });
  });

  return (
    <FormProvider reset={reset} {...form}>
      <ProjectDatesFormLayout onSubmit={onSubmit} />
    </FormProvider>
  );
}
