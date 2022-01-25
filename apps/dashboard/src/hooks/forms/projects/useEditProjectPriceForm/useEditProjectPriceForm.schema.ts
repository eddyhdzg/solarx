import * as yup from "yup";
import { ProjectPrice } from "solarx-types";

export interface IEditProjectPriceSchema
  extends Pick<ProjectPrice, "quantity"> {}

export const editProjectPriceDefaultValues: IEditProjectPriceSchema = {
  quantity: 1,
};

export const editProjectPriceSchema: yup.SchemaOf<IEditProjectPriceSchema> =
  yup.object({
    quantity: yup.number().required("Value is required"),
  });
