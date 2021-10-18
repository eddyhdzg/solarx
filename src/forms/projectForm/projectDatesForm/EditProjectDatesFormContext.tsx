import { useEffect } from "react";
import {
  IProjectDatesSchema,
  useProject,
  useEditProjectDatesForm,
  editProjectDatesDefaultValues,
  useProjectDatesMutation,
} from "hooks";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import ProjectDatesForm from "./ProjectDatesForm";
import { useParams } from "react-router-dom";
import { getDirtyValues } from "utils";

interface ProjectID {
  id?: string;
}

export default function EditProjectDatesFormContext() {
  const form = useEditProjectDatesForm();
  const { t } = useTranslation();
  const { id } = useParams<ProjectID>();
  const { data, status } = useProject(id || "");
  const editProjectDatesMutation = useProjectDatesMutation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const defaultValues: IProjectDatesSchema = !data
      ? editProjectDatesDefaultValues
      : {
          fundedDate: data?.fundedDate?.toDate() || null,
          releaseDate: data?.releaseDate?.toDate() || null,
          operationDate: data?.operationDate?.toDate() || null,
        };

    form.reset(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, data]);

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      form?.formState?.dirtyFields,
      values
    ) as IProjectDatesSchema;

    editProjectDatesMutation(data.id || "", dirtyValues)
      .then(() => {
        enqueueSnackbar(t("snackbar.projectEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotEdited"), { variant: "error" });
      });
  });

  return (
    <FormProvider {...form}>
      <ProjectDatesForm onSubmit={onSubmit} />
    </FormProvider>
  );
}
