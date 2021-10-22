import * as yup from "yup";
import { EditBuyingOption } from "types";

export const editProjectBuyingOptionDefaultValues: EditBuyingOption = {
  description: "",
  subtitle: "",
  title: "",
};

export const editProjectBuyingOptionSchema: yup.SchemaOf<EditBuyingOption> =
  yup.object({
    description: yup.string().required("Value is required"),
    subtitle: yup.string().required("Value is required"),
    title: yup.string().required("Value is required"),
  });
