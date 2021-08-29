import * as yup from "yup";
import { FirestoreUser } from "types";

export interface IFirestoreUserFormSchema
  extends Omit<FirestoreUser, "uid" | "avatar" | "role" | "email"> {}

export const firestoreUserFormDefaultValues: IFirestoreUserFormSchema = {
  displayName: "",
};

export const firestoreUserFormSchema: yup.SchemaOf<IFirestoreUserFormSchema> =
  yup.object({
    displayName: yup.string().required("Value is required"),
  });
