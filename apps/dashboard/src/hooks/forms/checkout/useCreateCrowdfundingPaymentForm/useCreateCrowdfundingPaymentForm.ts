import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createCrowdfundingPaymentSchema,
  createCrowdfundingPaymentDefaultValues,
} from "./useCreateCrowdfundingPaymentForm.schema";

export default function useCreateCrowdfundingPaymentForm() {
  const form = useForm({
    resolver: yupResolver(createCrowdfundingPaymentSchema),
    mode: "onChange",
    defaultValues: createCrowdfundingPaymentDefaultValues,
  });

  return form;
}
