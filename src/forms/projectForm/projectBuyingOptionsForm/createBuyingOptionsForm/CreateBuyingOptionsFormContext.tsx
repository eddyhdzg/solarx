import {
  useProjectBuyingOptionsMutation,
  useCreateProjectBuyingOptionForm,
} from "hooks";
import { FormProvider } from "react-hook-form";
import { useSnackbar } from "notistack";
import CreateBuyingOptionForm from "./CreateBuyingOptionsForm";
import { useTranslation } from "react-i18next";

interface ICreateProjectBuyingOptionFormContextProps {
  projectId?: string;
  scrolled: boolean;
}

export default function CreateBuyingOptionFormContext({
  projectId,
  scrolled,
}: ICreateProjectBuyingOptionFormContextProps) {
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
      <CreateBuyingOptionForm onSubmit={onSubmit} scrolled={scrolled} />
    </FormProvider>
  );
}
