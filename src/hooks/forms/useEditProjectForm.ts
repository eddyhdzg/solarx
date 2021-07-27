import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createProjectFormSchema,
  IProjectFormSchema,
  projectFormDefaultValues,
} from "./useCreateProjectDataForm/useCreateProjectDataForm.schema";

export default function useEditProjectForm() {
  const form = useForm<IProjectFormSchema>({
    resolver: yupResolver(createProjectFormSchema),
    mode: "onTouched",
    defaultValues: projectFormDefaultValues,
  });

  return form;
}
