import { useEffect } from "react";
import { useEditProjectDiscountForm, useProjectDiscountsMutation } from "hooks";
import { FormProvider } from "react-hook-form";
import { Discount, EditDiscount } from "types";
import EditDiscountForm from "./EditDiscountForm";
import { getDirtyValues } from "utils";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

interface IEditDiscountFormContextProps extends Discount {
  projectId?: string;
}

export default function EditDiscountFormContext({
  projectId,
  name,
  description,
  ...discount
}: IEditDiscountFormContextProps) {
  const form = useEditProjectDiscountForm();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    form.reset({ name, description });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, description]);

  const { editProjectDiscount } = useProjectDiscountsMutation();

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      form?.formState?.dirtyFields,
      values
    ) as EditDiscount;

    editProjectDiscount(projectId || "", discount?.id || "", dirtyValues)
      .then(() => {
        enqueueSnackbar(t("snackbar.discountEdited"), {
          variant: "success",
        });
        form.reset();
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.discountNotEdited"), { variant: "error" });
      });
  });

  return (
    <FormProvider {...form}>
      <EditDiscountForm onSubmit={onSubmit} {...discount} />
    </FormProvider>
  );
}
