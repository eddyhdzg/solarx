import { useEffect } from "react";
import {
  useProjectGeneralForm,
  useProjectGeneralMutation,
  IProjectGeneralSchema,
  useProject,
  projectGeneralDefaultValues,
} from "hooks";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { mexicanStates } from "constant";
import { useParams } from "react-router-dom";
import { getDirtyValues } from "utils";
import ProjectGeneralFormLayout from "../ProjectGeneralFormLayout";

interface ProjectID {
  id?: string;
}

export default function EditProjectGeneralForm() {
  const { reset, ...form } = useProjectGeneralForm();
  const { t } = useTranslation();
  const { id } = useParams<ProjectID>();
  const { data, status } = useProject(id || "");
  const { editProjectGeneralMutation } = useProjectGeneralMutation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const defaultValues: IProjectGeneralSchema = !data
      ? projectGeneralDefaultValues
      : {
          archived: data?.archived,
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

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      form?.formState?.dirtyFields,
      values
    ) as IProjectGeneralSchema;

    editProjectGeneralMutation(data.id || "", dirtyValues)
      .then(() => {
        enqueueSnackbar(t("snackbar.projectEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotEdited"), { variant: "error" });
      });
  });

  return (
    <FormProvider reset={reset} {...form}>
      <ProjectGeneralFormLayout title="Edit" onSubmit={onSubmit} />
    </FormProvider>
  );
}