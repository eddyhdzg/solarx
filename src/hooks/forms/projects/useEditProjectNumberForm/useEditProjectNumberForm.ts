import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  editProjectNumberSchema,
  editProjectNumberDefaultValues,
} from "./useEditProjectNumberForm.schema";

export default function useEditProjectNumberForm() {
  const form = useForm({
    resolver: yupResolver(editProjectNumberSchema),
    mode: "onTouched",
    defaultValues: editProjectNumberDefaultValues,
  });

  return form;
}
