import * as yup from "yup";
import { BuyingOption } from "types";

export interface IEditProjectBuyingOptionSchema
  extends Pick<BuyingOption, "title" | "subtitle" | "description"> {}

export const editProjectBuyingOptionDefaultValues: IEditProjectBuyingOptionSchema =
  {
    description: "",
    subtitle: "",
    title: "",
  };

export const editProjectBuyingOptionSchema: yup.SchemaOf<IEditProjectBuyingOptionSchema> =
  yup.object({
    description: yup.string().required("Value is required"),
    subtitle: yup.string().required("Value is required"),
    title: yup.string().required("Value is required"),
  });
