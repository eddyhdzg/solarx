import { useCreateProjectGeneralForm, useProjectGeneralMutation } from "hooks";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import ProjectGeneralForm from "./ProjectGeneralForm";
import { useHistory } from "react-router-dom";

export default function CreateProjectGeneralFormContext() {
  const form = useCreateProjectGeneralForm();
  const { t } = useTranslation();
  const { createProjectGeneralMutation } = useProjectGeneralMutation();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();

    createProjectGeneralMutation(values)
      .then(({ id }) => {
        enqueueSnackbar(t("snackbar.projectAdded"), { variant: "success" });
        history.push(`/admin/projects/${id}`);
      })

      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotAdded"), { variant: "error" });
      });
  });

  return (
    <FormProvider {...form}>
      <ProjectGeneralForm title="Create" onSubmit={onSubmit} />
    </FormProvider>
  );
}
