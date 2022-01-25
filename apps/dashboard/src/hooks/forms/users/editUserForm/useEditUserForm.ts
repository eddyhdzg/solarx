import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  editUserSchema,
  editUserDefaultValues,
} from "./useEditUserForm.schema";

export default function useEditUserForm() {
  const form = useForm({
    resolver: yupResolver(editUserSchema),
    mode: "onChange",
    defaultValues: editUserDefaultValues,
  });

  return form;
}
