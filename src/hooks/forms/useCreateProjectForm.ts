import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useFormPersist from "react-hook-form-persist";
import { useProjectsMutations } from "..";
import { useSnackbar } from "notistack";
import {
  createProjectSchema,
  useCreateProjectFormSchema,
  createProjectDefaultValues,
} from "./schema.project";

export default function useCreateProjectForm() {
  const form = useForm<useCreateProjectFormSchema>({
    resolver: yupResolver(createProjectSchema),
    mode: "onTouched",
    defaultValues: createProjectDefaultValues,
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
        form.reset(createProjectDefaultValues);
      })
      .catch(() => {
        enqueueSnackbar("Project Not Added 😔", { variant: "error" });
      });
  });

  return { onSubmit, ...form };
}
