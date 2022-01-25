import * as yup from "yup";

export interface CreateCrowdfundingPaymentFormSchema {
  paymentMethod: string;
}

export const createCrowdfundingPaymentDefaultValues: CreateCrowdfundingPaymentFormSchema =
  {
    paymentMethod: "",
  };

export const createCrowdfundingPaymentSchema: yup.SchemaOf<CreateCrowdfundingPaymentFormSchema> =
  yup.object({
    paymentMethod: yup.string().required("Value is required"),
  });
