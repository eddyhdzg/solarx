import {
  useProjectDiscountsMutation,
  useCreateProjectDiscountForm,
} from "hooks";
import { FormProvider } from "react-hook-form";
import { useSnackbar } from "notistack";
import CreateDiscountForm from "./CreateDiscountForm";
import { useTranslation } from "react-i18next";

interface ICreateProjectDiscountFormContextProps {
  projectId?: string;
}

export default function CreateDiscountFormContext({
  projectId,
}: ICreateProjectDiscountFormContextProps) {
  const form = useCreateProjectDiscountForm();
  const { t } = useTranslation();
  const { createProjectDiscount } = useProjectDiscountsMutation();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();

    createProjectDiscount(projectId || "", values)
      .then(() => {
        enqueueSnackbar(t("snackbar.discountAdded"), {
          variant: "success",
        });
        form.reset();
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.discountNotAdded"), { variant: "error" });
      });
  });

  return (
    <FormProvider {...form}>
      <CreateDiscountForm onSubmit={onSubmit} />
    </FormProvider>
  );
}
