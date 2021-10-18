import * as yup from "yup";
import { FirestoreUser } from "types";

export type IFirestoreUserFormSchema = Pick<FirestoreUser, "displayName">;

export const firestoreUserFormDefaultValues: IFirestoreUserFormSchema = {
  displayName: "",
};

export const firestoreUserFormSchema: yup.SchemaOf<IFirestoreUserFormSchema> =
  yup.object({
    displayName: yup.string().required("Value is required"),
  });
