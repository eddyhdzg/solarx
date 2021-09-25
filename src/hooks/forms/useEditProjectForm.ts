import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  projectFormSchema,
  projectFormDefaultValues,
} from "./useCreateProjectDataForm/useCreateProjectDataForm.schema";

export default function useEditProjectForm() {
  const form = useForm({
    resolver: yupResolver(projectFormSchema),
    mode: "onTouched",
    defaultValues: projectFormDefaultValues,
  });

  return form;
}
