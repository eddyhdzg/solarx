import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useFormPersist from "react-hook-form-persist";
import { useProjectsMutations } from "..";
import { useSnackbar } from "notistack";
import {
  projectFormSchema,
  useProjectFormSchema,
  projectFormDefaultValues,
} from "./schema.project";

export default function useCreateProjectForm() {
  const form = useForm<useProjectFormSchema>({
    resolver: yupResolver(projectFormSchema),
    mode: "onTouched",
    defaultValues: projectFormDefaultValues,
  });

  useFormPersist(
    "createProject",
    { watch: form.watch, setValue: form.setValue },
    {
      storage: window.localStorage,
    }
  );

  const { createProject } = useProjectsMutations();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = form.handleSubmit((data, e) => {
    e?.preventDefault();

    createProject(data)
      .then(() => {
        enqueueSnackbar("Project Added! 🔥", { variant: "success" });
        form.reset({}, { keepDefaultValues: true });
      })
      .catch(() => {
        enqueueSnackbar("Project Not Added 😔", { variant: "error" });
      });
  });

  return { onSubmit, ...form };
}
