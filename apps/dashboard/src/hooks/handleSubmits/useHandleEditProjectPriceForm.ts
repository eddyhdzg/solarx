import { useEffect } from "react";
import { EditProjectPriceSchema, useEditProjectPricesMutation } from "hooks";
import { getDirtyValues } from "utils";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import { FormState, UseFormHandleSubmit, UseFormReset } from "react-hook-form";

export default function useHandleEditProjectPriceForm(
  formState: FormState<EditProjectPriceSchema>,
  handleSubmit: UseFormHandleSubmit<EditProjectPriceSchema>,
  projectId: string = "",
  priceId: string = "",
  quantity: number = 1,
  reset: UseFormReset<EditProjectPriceSchema>
) {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    reset({ quantity });
  }, [quantity, reset]);

  const editProjectPrice = useEditProjectPricesMutation();

  const onSubmit = handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      formState?.dirtyFields,
      values
    ) as EditProjectPriceSchema;

    editProjectPrice(projectId, priceId, dirtyValues)
      .then(() => {
        enqueueSnackbar(t("snackbar.priceEdited"), {
          variant: "success",
        });
        reset();
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.priceNotEdited"), {
          variant: "error",
        });
      });
  });

  return onSubmit;
}
