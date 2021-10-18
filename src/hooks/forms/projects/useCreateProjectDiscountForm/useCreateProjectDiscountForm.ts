import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createProjectDiscountSchema,
  createProjectDiscountDefaultValues,
} from "./useCreateProjectDiscountForm.schema";

export default function useCreateProjectDiscountForm() {
  const form = useForm({
    resolver: yupResolver(createProjectDiscountSchema),
    mode: "onChange",
    defaultValues: createProjectDiscountDefaultValues,
  });

  return form;
}
