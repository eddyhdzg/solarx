import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  editProjectDatesSchema,
  editProjectDatesDefaultValues,
} from "./useEditProjectDatesForm.schema";

export default function useEditProjectDatesForm() {
  const form = useForm({
    resolver: yupResolver(editProjectDatesSchema),
    mode: "onChange",
    defaultValues: editProjectDatesDefaultValues,
  });

  return form;
}
