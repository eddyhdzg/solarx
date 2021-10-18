import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  projectMediaSchema,
  projectMediaDefaultValues,
} from "./useProjectMediaForm.schema";

export default function useEditProjectMediaForm() {
  const form = useForm({
    resolver: yupResolver(projectMediaSchema),
    mode: "onChange",
    defaultValues: projectMediaDefaultValues,
  });

  return form;
}
