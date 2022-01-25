import * as yup from "yup";
import { PaymentMethod as StripePaymentMethod } from "@stripe/stripe-js";

export interface ICreatePaymentMethodFormSchema
  extends Pick<StripePaymentMethod.BillingDetails, "name"> {}

export const createPaymentMethodDefaultValues: ICreatePaymentMethodFormSchema =
  {
    name: "",
  };

export const createPaymentMethodSchema: yup.SchemaOf<ICreatePaymentMethodFormSchema> =
  yup.object({
    name: yup.string().required("Value is required"),
  });
