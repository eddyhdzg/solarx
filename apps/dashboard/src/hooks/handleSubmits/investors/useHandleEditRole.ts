import { useEffect } from "react";
import {
  useEditRoleMutation,
  IEditRoleSchema,
  editRoleDefaultValues,
} from "hooks";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { UserRole } from "solarx-types";
import { UseFormReset } from "react-hook-form";

export default function useHandleEditRole(
  reset: UseFormReset<IEditRoleSchema>,
  uid: string = "",
  role?: UserRole
) {
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
    editUserMutation(uid, role)
      .then(() => {
        enqueueSnackbar(t("snackbar.roleEdited"), { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.roleNotEdited"), { variant: "error" });
      });
  };

  return onSubmit;
}
