import { useEffect } from "react";
import {
  IEditProjectBuyingOptionSchema,
  useEditProjectBuyingOptionForm,
  useProjectBuyingOptionsMutation,
} from "hooks";
import { FormProvider } from "react-hook-form";
import { BuyingOption } from "types";
import { getDirtyValues } from "utils";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import EditProjectBuyingOptionFormLayout from "./EditProjectBuyingOptionFormLayout";

interface IEditProjectBuyingOptionFormContextProps extends BuyingOption {
  projectId?: string;
  scrolled: boolean;
}

export default function EditProjectBuyingOptionFormContext({
  projectId,
  description,
  title,
  subtitle,
  scrolled,
  ...buyingOption
}: IEditProjectBuyingOptionFormContextProps) {
  const { reset, ...form } = useEditProjectBuyingOptionForm();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    reset({ title, subtitle, description });
  }, [title, subtitle, description, reset]);

  const { editProjectBuyingOption } = useProjectBuyingOptionsMutation();

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      form?.formState?.dirtyFields,
      values
    ) as IEditProjectBuyingOptionSchema;

    editProjectBuyingOption(
      projectId || "",
      buyingOption?.id || "",
      dirtyValues
    )
      .then(() => {
        enqueueSnackbar(t("snackbar.buyingOptionEdited"), {
          variant: "success",
        });
        reset();
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.buyingOptionNotEdited"), {
          variant: "error",
        });
      });
  });

  return (
    <FormProvider reset={reset} {...form}>
      <EditProjectBuyingOptionFormLayout
        onSubmit={onSubmit}
        scrolled={scrolled}
        {...buyingOption}
      />
    </FormProvider>
  );
}
