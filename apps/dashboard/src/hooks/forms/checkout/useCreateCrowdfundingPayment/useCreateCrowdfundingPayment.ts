import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createCrowdfundingPaymentSchema,
  createCrowdfundingPaymentDefaultValues,
} from "./useCreateCrowdfundingPayment.schema";

export default function useCreateCrowdfundingPayment() {
  const form = useForm({
    resolver: yupResolver(createCrowdfundingPaymentSchema),
    mode: "onChange",
    defaultValues: createCrowdfundingPaymentDefaultValues,
  });

  return form;
}
