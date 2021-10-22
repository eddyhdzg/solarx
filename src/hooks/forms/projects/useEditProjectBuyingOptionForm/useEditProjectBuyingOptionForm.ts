import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  editProjectBuyingOptionSchema,
  editProjectBuyingOptionDefaultValues,
} from "./useEditProjectBuyingOptionForm.schema";

export default function useEditProjectBuyingOptionForm() {
  const form = useForm({
    resolver: yupResolver(editProjectBuyingOptionSchema),
    mode: "onChange",
    defaultValues: editProjectBuyingOptionDefaultValues,
  });

  return form;
}
