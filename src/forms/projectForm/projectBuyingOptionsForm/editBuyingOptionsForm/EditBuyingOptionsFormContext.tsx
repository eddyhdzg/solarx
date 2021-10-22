import { useEffect } from "react";
import {
  useEditProjectBuyingOptionForm,
  useProjectBuyingOptionsMutation,
} from "hooks";
import { FormProvider } from "react-hook-form";
import { BuyingOption, EditBuyingOption } from "types";
import EditBuyingOptionForm from "./EditBuyingOptionsForm";
import { getDirtyValues } from "utils";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

interface IEditBuyingOptionFormContextProps extends BuyingOption {
  projectId?: string;
  scrolled: boolean;
}

export default function EditBuyingOptionFormContext({
  projectId,
  description,
  title,
  subtitle,
  scrolled,
  ...buyingOption
}: IEditBuyingOptionFormContextProps) {
  const form = useEditProjectBuyingOptionForm();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    form.reset({ title, subtitle, description });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description]);

  const { editProjectBuyingOption } = useProjectBuyingOptionsMutation();

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      form?.formState?.dirtyFields,
      values
    ) as EditBuyingOption;

    editProjectBuyingOption(
      projectId || "",
      buyingOption?.id || "",
      dirtyValues
    )
      .then(() => {
        enqueueSnackbar(t("snackbar.buyingOptionEdited"), {
          variant: "success",
        });
        form.reset();
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.buyingOptionNotEdited"), {
          variant: "error",
        });
      });
  });

  return (
    <FormProvider {...form}>
      <EditBuyingOptionForm
        onSubmit={onSubmit}
        scrolled={scrolled}
        {...buyingOption}
      />
    </FormProvider>
  );
}
