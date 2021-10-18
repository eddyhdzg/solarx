import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  projectNumberSchema,
  projectNumberDefaultValues,
} from "./useProjectNumberForm.schema";

export default function useEditProjectNumberForm() {
  const form = useForm({
    resolver: yupResolver(projectNumberSchema),
    mode: "onTouched",
    defaultValues: projectNumberDefaultValues,
  });

  return form;
}
