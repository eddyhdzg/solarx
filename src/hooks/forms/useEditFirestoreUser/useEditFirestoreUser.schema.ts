import * as yup from "yup";
import { User } from "types";

export interface IFirestoreUserFormSchema
  extends Omit<User, "uid" | "avatar" | "role" | "email"> {}

export const firestoreUserFormDefaultValues: IFirestoreUserFormSchema = {
  displayName: "",
};

export const firestoreUserFormSchema: yup.SchemaOf<IFirestoreUserFormSchema> =
  yup.object({
    displayName: yup.string().required("Value is required"),
  });
