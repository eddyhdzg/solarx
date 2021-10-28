import * as yup from "yup";
import { BuyingOption } from "types";

export interface ICreateProjectBuyingOptionSchema
  extends Pick<
    BuyingOption,
    "description" | "discount" | "quantity" | "subtitle" | "title"
  > {}

export const createProjectBuyingOptionDefaultValues: ICreateProjectBuyingOptionSchema =
  {
    description: "",
    discount: 1,
    quantity: 1,
    subtitle: "",
    title: "",
  };

export const createProjectBuyingOptionSchema: yup.SchemaOf<ICreateProjectBuyingOptionSchema> =
  yup.object({
    description: yup.string().required("Value is required"),
    discount: yup
      .number()
      .default(1)
      .min(1, "Min value is 0")
      .max(100, "Max value is 100")
      .required("Value is required"),
    quantity: yup
      .number()
      .default(1)
      .min(1, "Min value is 1")
      .required("Value is required"),
    subtitle: yup.string().required("Value is required"),
    title: yup.string().required("Value is required"),
  });
