import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createPaymentMethodSchema,
  createPaymentMethodDefaultValues,
} from "./useCreatePaymentMethodForm.schema";

export default function useCreatePaymentMethodForm() {
  const form = useForm({
    resolver: yupResolver(createPaymentMethodSchema),
    mode: "onChange",
    defaultValues: createPaymentMethodDefaultValues,
  });

  return form;
}
