import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  editProjectDiscountSchema,
  editProjectDiscountDefaultValues,
} from "./useEditProjectDiscountForm.schema";

export default function useEditProjectDiscountForm() {
  const form = useForm({
    resolver: yupResolver(editProjectDiscountSchema),
    mode: "onChange",
    defaultValues: editProjectDiscountDefaultValues,
  });

  return form;
}
