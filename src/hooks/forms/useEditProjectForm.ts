import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useProjectsMutations } from "..";
import { useSnackbar } from "notistack";
import {
  editProjectSchema,
  useEditProjectFormSchema,
  editProjectDefaultValues,
} from "./schema.project";

export default function useEditProjectForm(id: string | undefined) {
  const form = useForm<useEditProjectFormSchema>({
    resolver: yupResolver(editProjectSchema),
    mode: "onTouched",
    defaultValues: editProjectDefaultValues,
  });

  const { editProject } = useProjectsMutations();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = form.handleSubmit((data, e) => {
    e?.preventDefault();

    editProject(id, data)
      .then(() => {
        enqueueSnackbar("Project Edited! 🔥", { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar("Project Not Edited 😔", { variant: "error" });
      });
  });

  return { onSubmit, ...form };
}
