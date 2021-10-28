import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  editProjectMediaSchema,
  editProjectMediaDefaultValues,
} from "./useEditProjectMediaForm.schema";

export default function useEditProjectMediaForm() {
  const form = useForm({
    // FIXME https://github.com/react-hook-form/resolvers/issues/245
    // @ts-ignore
    resolver: yupResolver(editProjectMediaSchema),
    mode: "onChange",
    defaultValues: editProjectMediaDefaultValues,
  });

  return form;
}
