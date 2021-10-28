import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  editProjectContentSchema,
  editProjectContentDefaultValues,
} from "./useEditProjectContentForm.schema";

export default function useEditProjectContentForm() {
  const form = useForm({
    resolver: yupResolver(editProjectContentSchema),
    mode: "onChange",
    defaultValues: editProjectContentDefaultValues,
  });

  return form;
}
