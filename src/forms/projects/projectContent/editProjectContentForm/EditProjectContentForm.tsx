import { useEffect } from "react";
import {
  useEditProjectContentForm,
  useEditProjectContentMutation,
  useProject,
  IEditProjectContentSchema,
  editProjectContentDefaultValues,
} from "hooks";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";
import { getDirtyValues } from "utils";
import { ProjectIDParams } from "types";
import ProjectContentFormLayout from "../ProjectContentFormLayout";

export default function EditProjectContentForm() {
  const { reset, ...form } = useEditProjectContentForm();
  const { t } = useTranslation();
  const { id } = useParams<ProjectIDParams>();
  const { data, status } = useProject(id || "");
  const editProjectContentMutation = useEditProjectContentMutation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const defaultValues: IEditProjectContentSchema = !data
      ? editProjectContentDefaultValues
      : {
          aboutContent: data?.aboutContent || "",
          generalContent: data?.generalContent || "",
          graphsContent: data?.graphsContent || "",
        };

    reset(defaultValues);
  }, [data, status, reset]);

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      form?.formState?.dirtyFields,
      values
    ) as IEditProjectContentSchema;

    editProjectContentMutation(data.id || "", dirtyValues)
      .then(() => {
        enqueueSnackbar(t("snackbar.projectEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotEdited"), { variant: "error" });
      });
  });

  return (
    <FormProvider reset={reset} {...form}>
      <ProjectContentFormLayout onSubmit={onSubmit} />
    </FormProvider>
  );
}
