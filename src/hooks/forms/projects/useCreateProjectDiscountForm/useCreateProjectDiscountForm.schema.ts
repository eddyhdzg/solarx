import * as yup from "yup";
import { CreateDiscount } from "types";

export const createProjectDiscountDefaultValues: CreateDiscount = {
  name: "",
  description: "",
  discount: 1,
  quantity: 1,
};

export const createProjectDiscountSchema: yup.SchemaOf<CreateDiscount> =
  yup.object({
    name: yup.string().required("Value is required"),
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
  });
