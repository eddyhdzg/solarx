import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createProjectBuyingOptionSchema,
  createProjectBuyingOptionDefaultValues,
} from "./useCreateProjectBuyingOptionForm.schema";

export default function useCreateProjectBuyingOptionForm() {
  const form = useForm({
    resolver: yupResolver(createProjectBuyingOptionSchema),
    mode: "onChange",
    defaultValues: createProjectBuyingOptionDefaultValues,
  });

  return form;
}
