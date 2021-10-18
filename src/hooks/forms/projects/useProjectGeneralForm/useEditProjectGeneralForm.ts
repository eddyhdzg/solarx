import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  projectGeneralSchema,
  projectGeneralDefaultValues,
} from "./useProjectGeneralForm.schema";

export default function useEditProjectGeneralForm() {
  const form = useForm({
    resolver: yupResolver(projectGeneralSchema),
    mode: "onChange",
    defaultValues: projectGeneralDefaultValues,
  });

  return form;
}
