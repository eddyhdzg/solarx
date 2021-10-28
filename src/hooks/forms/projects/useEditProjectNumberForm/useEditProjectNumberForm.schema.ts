import * as yup from "yup";
import { Project } from "types";

export interface IEditProjectNumberSchema
  extends Pick<Project, "roi" | "sharePrice" | "totalShares" | "ppa"> {}

export const editProjectNumberDefaultValues: IEditProjectNumberSchema = {
  roi: 0,
  sharePrice: 1,
  totalShares: 1,
  ppa: 0,
};

export const editProjectNumberSchema: yup.SchemaOf<IEditProjectNumberSchema> =
  yup
    .object()
    .shape({
      roi: yup
        .number()
        .default(0)
        .min(0, "Min value is 0")
        .max(100, "Max value is 100")
        .required("Value is required"),
      sharePrice: yup
        .number()
        .default(1)
        .min(1, "Min value is 1")
        .required("Value is required"),
      totalShares: yup
        .number()
        .default(1)
        .min(1, "Min value is 1")
        .required("Value is required"),
      ppa: yup.number().default(0).min(0, "Min value is 0").required(),
    })
    .required();
