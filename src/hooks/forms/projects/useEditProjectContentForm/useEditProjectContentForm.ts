import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  editProjectContentSchema,
  editProjectContentDefaultValues,
} from "./useEditProjectContentForm.schema";

export default function useEditProjectContentForm() {
  const form = useForm({
    // FIXME https://github.com/react-hook-form/resolvers/issues/245
    // @ts-ignore
    resolver: yupResolver(editProjectContentSchema),
    mode: "onChange",
    defaultValues: editProjectContentDefaultValues,
  });

  return form;
}
