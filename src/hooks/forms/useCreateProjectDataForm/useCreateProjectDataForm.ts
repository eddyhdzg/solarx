import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormPersist } from "hooks";
import {
  projectFormSchema,
  projectFormDefaultValues,
} from "./useCreateProjectDataForm.schema";

export default function useCreateProjectDataForm() {
  const form = useForm({
    resolver: yupResolver(projectFormSchema),
    mode: "onTouched",
    defaultValues: projectFormDefaultValues,
  });

  useFormPersist(
    "createProjectDataForm",
    { watch: form.watch, setValue: form.setValue },
    {
      storage: window.localStorage,
      defaultValues: projectFormDefaultValues,
      exclude: ["coverImage", "images"],
    }
  );

  return form;
}
