import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  editInvestorSchema,
  editInvestorDefaultValues,
} from "./useEditInvestorForm.schema";

export default function useEditInvestorForm() {
  const form = useForm({
    resolver: yupResolver(editInvestorSchema),
    mode: "onChange",
    defaultValues: editInvestorDefaultValues,
  });

  return form;
}
