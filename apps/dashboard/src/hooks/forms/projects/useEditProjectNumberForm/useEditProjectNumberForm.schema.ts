import * as yup from "yup";
import { Project } from "solarx-types";

export interface EditProjectNumberSchema
  extends Pick<Project, "roi" | "basePrice" | "totalPanels" | "ppa"> {}

export const editProjectNumberDefaultValues: EditProjectNumberSchema = {
  roi: 0,
  basePrice: 1,
  totalPanels: 1,
  ppa: 0,
};

export const editProjectNumberSchema: yup.SchemaOf<EditProjectNumberSchema> =
  yup
    .object()
    .shape({
      roi: yup
        .number()
        .default(0)
        .min(0, "Min value is 0")
        .max(100, "Max value is 100")
        .required("Value is required"),
      basePrice: yup
        .number()
        .default(1)
        .min(1, "Min value is 1")
        .required("Value is required"),
      totalPanels: yup
        .number()
        .default(1)
        .min(1, "Min value is 1")
        .required("Value is required"),
      ppa: yup.number().default(0).min(0, "Min value is 0").required(),
    })
    .required();
