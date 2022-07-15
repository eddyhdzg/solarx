import { useEffect } from "react";
import {
  useEditProjectContentMutation,
  EditProjectContentSchema,
  editProjectContentDefaultValues,
  useProjectContent,
} from "hooks";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";
import { getDirtyValues } from "utils";
import { ProjectIDParams } from "solarx-types";
import { UseFormReset, UseFormHandleSubmit, FormState } from "react-hook-form";

export default function useHandleEditProjectContentForm(
  formState: FormState<EditProjectContentSchema>,
  handleSubmit: UseFormHandleSubmit<EditProjectContentSchema>,
  reset: UseFormReset<EditProjectContentSchema>
) {
  const { t } = useTranslation();
  const { id = "" } = useParams<ProjectIDParams>();
  const { data, status } = useProjectContent(id);
  const editProjectContentMutation = useEditProjectContentMutation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const defaultValues: EditProjectContentSchema = !data
      ? editProjectContentDefaultValues
      : {
          about: data?.about || "",
          general: data?.general || "",
          graphs: data?.graphs || "",
        };

    reset(defaultValues);
  }, [data, status, reset]);

  const onSubmit = handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      formState?.dirtyFields,
      values
    ) as EditProjectContentSchema;

    editProjectContentMutation(id, dirtyValues)
      .then(() => {
        enqueueSnackbar(t("snackbar.projectEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotEdited"), { variant: "error" });
      });
  });

  return onSubmit;
}
