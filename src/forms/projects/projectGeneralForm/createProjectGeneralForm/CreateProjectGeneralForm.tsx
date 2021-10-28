import { useProjectGeneralForm, useProjectGeneralMutation } from "hooks";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import ProjectGeneralFormLayout from "../ProjectGeneralFormLayout";

export default function CreateProjectGeneralForm() {
  const form = useProjectGeneralForm();
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
      <ProjectGeneralFormLayout title="Create" onSubmit={onSubmit} />
    </FormProvider>
  );
}
