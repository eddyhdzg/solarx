import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createProjectDiscountFormSchema,
  createProjectDiscountFormDefaultValues,
} from "./useCreateProjectDiscount.schema";

export default function useCreateProjectDiscount() {
  const form = useForm({
    resolver: yupResolver(createProjectDiscountFormSchema),
    mode: "onChange",
    defaultValues: createProjectDiscountFormDefaultValues,
  });

  return form;
}
