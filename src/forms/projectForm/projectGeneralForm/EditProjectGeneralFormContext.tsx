import { useEffect } from "react";
import {
  useCreateProjectGeneralForm,
  useProjectGeneralMutation,
  IProjectGeneralSchema,
  useProject,
  projectGeneralDefaultValues,
} from "hooks";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import ProjectGeneralForm from "./ProjectGeneralForm";
import { mexicanStates } from "constant";
import { useParams } from "react-router-dom";
import { getDirtyValues } from "utils";

interface ProjectID {
  id?: string;
}

export default function EditProjectGeneralFormContext() {
  const form = useCreateProjectGeneralForm();
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

    form.reset(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, data]);

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
    <FormProvider {...form}>
      <ProjectGeneralForm title="Edit" onSubmit={onSubmit} />
    </FormProvider>
  );
}
