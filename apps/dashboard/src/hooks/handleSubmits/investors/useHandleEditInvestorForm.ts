import { useEffect } from "react";
import {
  useEditUserMutation,
  useInvestor,
  IEditUserSchema,
  editUserDefaultValues,
} from "hooks";
import { useTranslation } from "react-i18next";
import { getDirtyValues } from "utils";
import { useSnackbar } from "notistack";
import { UseFormReset, UseFormHandleSubmit, FormState } from "react-hook-form";

export default function useHandleEditInvestorForm(
  formState: FormState<IEditUserSchema>,
  handleSubmit: UseFormHandleSubmit<IEditUserSchema>,
  reset: UseFormReset<IEditUserSchema>
) {
  const { t } = useTranslation();
  const { data, status } = useInvestor();
  const editUserMutation = useEditUserMutation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const defaultValues: IEditUserSchema = !data
      ? editUserDefaultValues
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
    ) as IEditUserSchema;

    editUserMutation(data?.uid || "", dirtyValues)
      .then(() => {
        enqueueSnackbar(t("snackbar.investorEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.investorNotEdited"), { variant: "error" });
      });
  });

  return onSubmit;
}
