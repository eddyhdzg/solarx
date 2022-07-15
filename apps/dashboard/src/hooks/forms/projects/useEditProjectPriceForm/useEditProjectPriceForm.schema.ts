import * as yup from "yup";
import { ProjectPrice } from "solarx-types";

export interface EditProjectPriceSchema
  extends Pick<ProjectPrice, "quantity"> {}

export const editProjectPriceDefaultValues: EditProjectPriceSchema = {
  quantity: 1,
};

export const editProjectPriceSchema: yup.SchemaOf<EditProjectPriceSchema> =
  yup.object({
    quantity: yup.number().required("Value is required"),
  });
