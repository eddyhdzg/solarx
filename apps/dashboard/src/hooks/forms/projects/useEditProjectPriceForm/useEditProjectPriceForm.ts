import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  editProjectPriceSchema,
  editProjectPriceDefaultValues,
} from "./useEditProjectPriceForm.schema";

export default function useEditProjectPriceForm() {
  const form = useForm({
    resolver: yupResolver(editProjectPriceSchema),
    mode: "onChange",
    defaultValues: editProjectPriceDefaultValues,
  });

  return form;
}
