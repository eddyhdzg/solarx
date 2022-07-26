import { useEffect } from "react";
import {
  useEditUserForm,
  useEditUserMutation,
  useFirestoreUser,
  IEditUserSchema,
  editUserDefaultValues,
} from "hooks";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { getDirtyValues } from "utils";
import { useSnackbar } from "notistack";
import AccountInformationFormLayout from "./AccountInformationFormLayout";

export default function AccountInformationForm() {
  const { reset, ...form } = useEditUserForm();
  const { t } = useTranslation();
  const { data, status } = useFirestoreUser();
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

  const onSubmit = form.handleSubmit((values, e) => {
    e?.preventDefault();

    const dirtyValues = getDirtyValues(
      form?.formState?.dirtyFields,
      values
    ) as IEditUserSchema;

    editUserMutation(data?.uid || "", dirtyValues)
      .then(() => {
        enqueueSnackbar(t("snackbar.userEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.userNotEdited"), { variant: "error" });
      });
  });

  return (
    <FormProvider reset={reset} {...form}>
      <AccountInformationFormLayout onSubmit={onSubmit} />
    </FormProvider>
  );
}
