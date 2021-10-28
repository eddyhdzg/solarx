import * as yup from "yup";
import { UserRole } from "types";

export interface IEditRoleSchema {
  role: UserRole;
}

export const editRoleDefaultValues: IEditRoleSchema = {
  role: "DEFAULT",
};

export const editRoleSchema: yup.SchemaOf<IEditRoleSchema> = yup
  .object()
  .shape({
    role: yup
      .string()
      .oneOf(["DEFAULT", "BETA", "ADMIN", "MODERATOR", "SUPER_USER"]),
  })
  .required();
