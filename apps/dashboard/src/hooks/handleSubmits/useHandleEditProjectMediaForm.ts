import { useEffect } from "react";
import {
  useEditProjectMediaMutation,
  EditProjectMediaSchema,
  editProjectMediaDefaultValues,
  useProjectContent,
} from "hooks";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";
import { getDirtyValues } from "utils";
import { ProjectIDParams } from "solarx-types";
import { UseFormReset, UseFormHandleSubmit, FormState } from "react-hook-form";

export default function useHandleEditProjectMediaForm(
  formState: FormState<EditProjectMediaSchema>,
  handleSubmit: UseFormHandleSubmit<EditProjectMediaSchema>,
  reset: UseFormReset<EditProjectMediaSchema>
) {
  const { t } = useTranslation();
  const { id = "" } = useParams<ProjectIDParams>();
  const { data, status } = useProjectContent(id);
  const editProjectMediaMutation = useEditProjectMediaMutation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    // @ts-ignore
    const defaultValues: EditProjectMediaSchema = !data
      ? editProjectMediaDefaultValues
      : {
          images: data?.images,
        };

    reset(defaultValues);
  }, [status, data, reset]);

  const onSubmit = handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      formState?.dirtyFields,
      values
    ) as EditProjectMediaSchema;

    editProjectMediaMutation(id, dirtyValues)
      .then(() => {
        enqueueSnackbar(t("snackbar.projectEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotEdited"), { variant: "error" });
      });
  });

  return onSubmit;
}
