import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  projectContentSchema,
  projectContentDefaultValues,
} from "./useEditProjectContentForm.schema";

export default function useEditProjectContentForm() {
  const form = useForm({
    resolver: yupResolver(projectContentSchema),
    mode: "onChange",
    defaultValues: projectContentDefaultValues,
  });

  return form;
}
