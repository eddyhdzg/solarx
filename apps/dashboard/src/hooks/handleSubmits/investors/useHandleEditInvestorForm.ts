import { useEffect } from "react";
import {
  useEditInvestorMutation,
  useInvestor,
  EditInvestorSchema,
  editInvestorDefaultValues,
} from "hooks";
import { useTranslation } from "react-i18next";
import { getDirtyValues } from "utils";
import { useSnackbar } from "notistack";
import { UseFormReset, UseFormHandleSubmit, FormState } from "react-hook-form";

export default function useHandleEditInvestorForm(
  formState: FormState<EditInvestorSchema>,
  handleSubmit: UseFormHandleSubmit<EditInvestorSchema>,
  reset: UseFormReset<EditInvestorSchema>
) {
  const { t } = useTranslation();
  const { data, status } = useInvestor();
  const editInvestorMutation = useEditInvestorMutation();
  const { enqueueSnackbar } = useSnackbar();
  const uid = data?.uid || "";

  useEffect(() => {
    const defaultValues: EditInvestorSchema = !data
      ? editInvestorDefaultValues
      : {
          displayName: data?.displayName,
        };

    reset(defaultValues);
  }, [status, data, reset]);

  const onSubmit = handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      formState?.dirtyFields,
      values
    ) as EditInvestorSchema;

    editInvestorMutation(uid, dirtyValues)
      .then(() => {
        enqueueSnackbar(t("snackbar.investorEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.investorNotEdited"), { variant: "error" });
      });
  });

  return onSubmit;
}
