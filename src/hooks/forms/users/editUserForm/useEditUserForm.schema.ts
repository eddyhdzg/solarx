import * as yup from "yup";
import { FirestoreUser } from "types";

export type IEditUserSchema = Pick<FirestoreUser, "displayName">;

export const editUserDefaultValues: IEditUserSchema = {
  displayName: "",
};

export const editUserSchema: yup.SchemaOf<IEditUserSchema> = yup.object({
  displayName: yup.string().required("Value is required"),
});
