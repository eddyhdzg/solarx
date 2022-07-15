import { useEffect } from "react";
import {
  useEditProjectGeneralMutation,
  EditProjectGeneralSchema,
  useProject,
  editProjectGeneralDefaultValues,
} from "hooks";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { mexicanStates } from "constant";
import { useParams } from "react-router-dom";
import { getDirtyValues } from "utils";
import { ProjectIDParams } from "solarx-types";
import { UseFormReset, UseFormHandleSubmit, FormState } from "react-hook-form";

export default function useHandleEditProjectGeneralForm(
  formState: FormState<EditProjectGeneralSchema>,
  handleSubmit: UseFormHandleSubmit<EditProjectGeneralSchema>,
  reset: UseFormReset<EditProjectGeneralSchema>
) {
  const { t } = useTranslation();
  const { id } = useParams<ProjectIDParams>();
  const { data, status } = useProject(id || "");
  const editProjectGeneralMutation = useEditProjectGeneralMutation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const defaultValues: EditProjectGeneralSchema = !data
      ? editProjectGeneralDefaultValues
      : {
          businessType: data?.businessType,
          city: data?.city,
          company: data?.company,
          name: data?.name,
          state:
            mexicanStates.find((element) => {
              return element.name === data?.state;
            }) || null,
          status: data?.status,
        };

    reset(defaultValues);
  }, [status, data, reset]);

  const onSubmit = handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      formState?.dirtyFields,
      values
    ) as EditProjectGeneralSchema;

    editProjectGeneralMutation(data.id || "", dirtyValues)
      .then(() => {
        enqueueSnackbar(t("snackbar.projectEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotEdited"), { variant: "error" });
      });
  });

  return onSubmit;
}
