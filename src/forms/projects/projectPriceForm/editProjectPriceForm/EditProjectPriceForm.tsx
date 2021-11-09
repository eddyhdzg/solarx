import { useEffect } from "react";
import {
  IEditProjectPriceSchema,
  useEditProjectPriceForm,
  useEditProjectPricesMutation,
} from "hooks";
import { FormProvider } from "react-hook-form";
import { ProjectPrice } from "types";
import { getDirtyValues } from "utils";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import EditProjectPriceFormLayout from "./EditProjectPriceFormLayout";

interface IEditProjectPriceFormContextProps extends ProjectPrice {
  projectId?: string;
  scrolled: boolean;
}

export default function EditProjectPriceFormContext({
  projectId,
  quantity,
  scrolled,
  ...price
}: IEditProjectPriceFormContextProps) {
  const { reset, ...form } = useEditProjectPriceForm();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    reset({ quantity });
  }, [quantity, reset]);

  const editProjectPrice = useEditProjectPricesMutation();

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      form?.formState?.dirtyFields,
      values
    ) as IEditProjectPriceSchema;

    editProjectPrice(projectId || "", price?.id || "", dirtyValues)
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

  return (
    <FormProvider reset={reset} {...form}>
      <EditProjectPriceFormLayout
        onSubmit={onSubmit}
        scrolled={scrolled}
        {...price}
      />
    </FormProvider>
  );
}
