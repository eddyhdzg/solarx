import {
  useProjectBuyingOptionsMutation,
  useCreateProjectBuyingOptionForm,
} from "hooks";
import { FormProvider } from "react-hook-form";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import CreateProjectBuyingOptionFormLayout from "./CreateProjectBuyingOptionFormLayout";

interface ICreateProjectBuyingOptionFormProps {
  projectId?: string;
  scrolled: boolean;
}

export default function CreateProjectBuyingOptionForm({
  projectId,
  scrolled,
}: ICreateProjectBuyingOptionFormProps) {
  const form = useCreateProjectBuyingOptionForm();
  const { t } = useTranslation();
  const { createProjectBuyingOption } = useProjectBuyingOptionsMutation();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();

    createProjectBuyingOption(projectId || "", values)
      .then(() => {
        enqueueSnackbar(t("snackbar.buyingOptionAdded"), {
          variant: "success",
        });
        form.reset();
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.buyingOptionNotAdded"), {
          variant: "error",
        });
      });
  });

  return (
    <FormProvider {...form}>
      <CreateProjectBuyingOptionFormLayout
        onSubmit={onSubmit}
        scrolled={scrolled}
      />
    </FormProvider>
  );
}
