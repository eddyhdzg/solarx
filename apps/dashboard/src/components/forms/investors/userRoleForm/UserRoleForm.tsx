import { useEditRoleForm, useHandleEditRole } from "hooks";
import { FormProvider } from "react-hook-form";
import { UserRole } from "solarx-types";
import UserRoleFormLayout from "./UserRoleFormLayout";

interface IUserRoleFormProps {
  uid?: string;
  role?: UserRole;
}

export default function UserRoleForm({ uid, role }: IUserRoleFormProps) {
  const form = useEditRoleForm();
  const onSubmit = useHandleEditRole(form.reset, uid, role);

  return (
    <FormProvider {...form}>
      <UserRoleFormLayout onSubmit={onSubmit} uid={uid} />
    </FormProvider>
  );
}
