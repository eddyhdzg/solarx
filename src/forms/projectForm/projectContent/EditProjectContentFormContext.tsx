import { useEffect } from "react";
import {
  useEditProjectContentForm,
  useProjectContentMutation,
  useProject,
  IProjectContentSchema,
  projectContentDefaultValues,
} from "hooks";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import ProjectContentForm from "./ProjectContentForm";
import { useParams } from "react-router-dom";
import { getDirtyValues } from "utils";

interface ProjectID {
  id?: string;
}

export default function EditProjectContentFormContext() {
  const form = useEditProjectContentForm();
  const { t } = useTranslation();
  const { id } = useParams<ProjectID>();
  const { data, status } = useProject(id || "");
  const editProjectContentMutation = useProjectContentMutation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const defaultValues: IProjectContentSchema = !data
      ? projectContentDefaultValues
      : {
          aboutContent: data?.aboutContent,
          generalContent: data?.generalContent,
          graphsContent: data?.graphsContent,
        };

    form.reset(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, data]);

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      form?.formState?.dirtyFields,
      values
    ) as IProjectContentSchema;

    editProjectContentMutation(data.id || "", dirtyValues)
      .then(() => {
        enqueueSnackbar(t("snackbar.projectEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotEdited"), { variant: "error" });
      });
  });

  return (
    <FormProvider {...form}>
      <ProjectContentForm onSubmit={onSubmit} />
    </FormProvider>
  );
}
