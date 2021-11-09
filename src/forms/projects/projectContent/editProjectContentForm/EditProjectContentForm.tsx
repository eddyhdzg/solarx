import { useEffect } from "react";
import {
  useEditProjectContentForm,
  useEditProjectContentMutation,
  IEditProjectContentSchema,
  editProjectContentDefaultValues,
  useProjectContent,
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
  const { data, status } = useProjectContent(id || "");
  const editProjectContentMutation = useEditProjectContentMutation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const defaultValues: IEditProjectContentSchema = !data
      ? editProjectContentDefaultValues
      : {
          about: data?.about || "",
          general: data?.general || "",
          graphs: data?.graphs || "",
        };

    reset(defaultValues);
  }, [data, status, reset]);

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      form?.formState?.dirtyFields,
      values
    ) as IEditProjectContentSchema;

    editProjectContentMutation(id || "", dirtyValues)
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
