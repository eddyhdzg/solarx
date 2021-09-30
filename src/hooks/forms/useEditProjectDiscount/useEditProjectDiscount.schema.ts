import * as yup from "yup";
import { Discount } from "types";

type EditDiscount = Pick<Discount, "name" | "description">;

export const editProjectDiscountFormDefaultValues: EditDiscount = {
  name: "",
  description: "",
};

export const editProjectDiscountFormSchema: yup.SchemaOf<EditDiscount> =
  yup.object({
    name: yup.string().required("Value is required"),
    description: yup.string().required("Value is required"),
  });
