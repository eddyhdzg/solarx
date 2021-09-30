import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  editProjectDiscountFormSchema,
  editProjectDiscountFormDefaultValues,
} from "./useEditProjectDiscount.schema";

export default function useEditProjectDiscount() {
  const form = useForm({
    resolver: yupResolver(editProjectDiscountFormSchema),
    mode: "onChange",
    defaultValues: editProjectDiscountFormDefaultValues,
  });

  return form;
}
