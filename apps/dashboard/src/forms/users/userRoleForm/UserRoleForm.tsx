import { useEffect } from "react";
import {
  useEditRoleForm,
  useEditRoleMutation,
  IEditRoleSchema,
  editRoleDefaultValues,
} from "hooks";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { UserRole } from "solarx-types";
import UserRoleFormLayout from "./UserRoleFormLayout";

interface IUserRoleFormProps {
  uid?: string;
  role?: UserRole;
}

export default function UserRoleForm({ uid, role }: IUserRoleFormProps) {
  const { reset, ...form } = useEditRoleForm();
  const { t } = useTranslation();
  const editUserMutation = useEditRoleMutation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const defaultValues: IEditRoleSchema = !role
      ? editRoleDefaultValues
      : {
          role,
        };

    reset(defaultValues);
  }, [role, reset]);

  const onSubmit = (role: UserRole) => {
    editUserMutation(uid || "", role)
      .then(() => {
        enqueueSnackbar(t("snackbar.roleEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.roleNotEdited"), { variant: "error" });
      });
  };

  return (
    <FormProvider reset={reset} {...form}>
      <UserRoleFormLayout onSubmit={onSubmit} uid={uid} />
    </FormProvider>
  );
}
