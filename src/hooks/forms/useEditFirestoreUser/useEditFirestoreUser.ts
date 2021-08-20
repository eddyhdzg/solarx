import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  firestoreUserFormSchema,
  firestoreUserFormDefaultValues,
  IFirestoreUserFormSchema,
} from "./useEditFirestoreUser.schema";

export default function useEditFirestoreUser() {
  const form = useForm<IFirestoreUserFormSchema>({
    resolver: yupResolver(firestoreUserFormSchema),
    mode: "onTouched",
    defaultValues: firestoreUserFormDefaultValues,
  });

  return form;
}
