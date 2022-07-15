import { useEffect } from "react";
import {
  EditProjectDatesSchema,
  useProject,
  editProjectDatesDefaultValues,
  useEditProjectDatesMutation,
} from "hooks";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";
import { getDirtyValues } from "utils";
import { ProjectIDParams } from "solarx-types";
import { UseFormReset, UseFormHandleSubmit, FormState } from "react-hook-form";

export default function useHandleEditProjectDatesForm(
  formState: FormState<EditProjectDatesSchema>,
  handleSubmit: UseFormHandleSubmit<EditProjectDatesSchema>,
  reset: UseFormReset<EditProjectDatesSchema>
) {
  const { t } = useTranslation();
  const { id = "" } = useParams<ProjectIDParams>();
  const { data, status } = useProject(id);
  const editProjectDatesMutation = useEditProjectDatesMutation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const defaultValues: EditProjectDatesSchema = !data
      ? editProjectDatesDefaultValues
      : {
          fundedDate: data?.fundedDate?.toDate() || null,
          releaseDate: data?.releaseDate?.toDate() || null,
          operationDate: data?.operationDate?.toDate() || null,
        };

    reset(defaultValues);
  }, [status, data, reset]);

  const onSubmit = handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      formState?.dirtyFields,
      values
    ) as EditProjectDatesSchema;

    editProjectDatesMutation(id, dirtyValues)
      .then(() => {
        enqueueSnackbar(t("snackbar.projectEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotEdited"), { variant: "error" });
      });
  });

  return onSubmit;
}
