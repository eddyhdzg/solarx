import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  editRoleSchema,
  editRoleDefaultValues,
} from "./useEditRoleForm.schema";

export default function useEditRoleForm() {
  const form = useForm({
    resolver: yupResolver(editRoleSchema),
    mode: "onChange",
    defaultValues: editRoleDefaultValues,
  });

  return form;
}
