import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  editProjectGeneralSchema,
  editProjectGeneralDefaultValues,
} from "./useEditProjectGeneralForm.schema";

export default function useEditProjectGeneralForm() {
  const form = useForm({
    resolver: yupResolver(editProjectGeneralSchema),
    mode: "onChange",
    defaultValues: editProjectGeneralDefaultValues,
  });

  return form;
}
