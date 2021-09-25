import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  firestoreUserFormSchema,
  firestoreUserFormDefaultValues,
} from "./useEditFirestoreUser.schema";

export default function useEditFirestoreUser() {
  const form = useForm({
    resolver: yupResolver(firestoreUserFormSchema),
    mode: "onTouched",
    defaultValues: firestoreUserFormDefaultValues,
  });

  return form;
}
