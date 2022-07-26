import { useEffect } from "react";
import {
  useEditProjectNumberMutation,
  useProject,
  EditProjectNumberSchema,
  editProjectNumberDefaultValues,
} from "hooks";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";
import { getDirtyValues } from "utils";
import { ProjectIDParams } from "solarx-types";
import { FormState, UseFormHandleSubmit, UseFormReset } from "react-hook-form";

export default function useHandleEditProjectNumberForm(
  formState: FormState<EditProjectNumberSchema>,
  handleSubmit: UseFormHandleSubmit<EditProjectNumberSchema>,
  reset: UseFormReset<EditProjectNumberSchema>
) {
  const { t } = useTranslation();
  const { id = "" } = useParams<ProjectIDParams>();
  const { data, status } = useProject(id);
  const editProjectNumberMutation = useEditProjectNumberMutation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const defaultValues: EditProjectNumberSchema = !data
      ? editProjectNumberDefaultValues
      : {
          roi: data?.roi,
          basePrice: data?.basePrice,
          totalPanels: data?.totalPanels,
          ppa: data?.ppa,
        };

    reset(defaultValues);
  }, [status, data, reset]);

  const onSubmit = handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      formState?.dirtyFields,
      values
    ) as EditProjectNumberSchema;

    editProjectNumberMutation(id, dirtyValues)
      .then(() => {
        enqueueSnackbar(t("snackbar.projectEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotEdited"), { variant: "error" });
      });
  });

  return onSubmit;
}
