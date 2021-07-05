import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useProjectsMutations } from "..";
import { useSnackbar } from "notistack";
import {
  projectFormSchema,
  useProjectFormSchema,
  projectFormDefaultValues,
} from "./schema.project";

export default function useEditProjectForm(id: string | undefined) {
  const form = useForm<useProjectFormSchema>({
    resolver: yupResolver(projectFormSchema),
    mode: "onTouched",
    defaultValues: projectFormDefaultValues,
  });

  const { editProject } = useProjectsMutations();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = form.handleSubmit((data, e) => {
    e?.preventDefault();

    editProject(id, data)
      .then(() => {
        enqueueSnackbar("Project Edited! 🔥", { variant: "success" });
        form.reset({}, { keepValues: true });
      })
      .catch(() => {
        enqueueSnackbar("Project Not Edited 😔", { variant: "error" });
      });
  });

  return { onSubmit, ...form };
}
