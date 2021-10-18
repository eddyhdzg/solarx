import * as yup from "yup";
import { EditDiscount } from "types";

export const editProjectDiscountDefaultValues: EditDiscount = {
  name: "",
  description: "",
};

export const editProjectDiscountSchema: yup.SchemaOf<EditDiscount> = yup.object(
  {
    name: yup.string().required("Value is required"),
    description: yup.string().required("Value is required"),
  }
);
