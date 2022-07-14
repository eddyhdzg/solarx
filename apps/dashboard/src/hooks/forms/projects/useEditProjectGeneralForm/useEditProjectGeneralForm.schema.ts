import * as yup from "yup";
import { Project } from "solarx-types";
import { MexicanState } from "constant";

export interface EditProjectGeneralSchema
  extends Pick<
    Project,
    "businessType" | "city" | "company" | "name" | "status"
  > {
  state: MexicanState | null;
}

export const editProjectGeneralDefaultValues: EditProjectGeneralSchema = {
  businessType: "",
  city: "",
  company: "",
  name: "",
  state: null,
  status: "coming soon",
};

export const editProjectGeneralSchema: yup.SchemaOf<EditProjectGeneralSchema> =
  yup.object({
    businessType: yup
      .string()
      .nullable()
      .default("")
      .required("Value is required"),
    city: yup.string().nullable().default("").required("Value is required"),
    company: yup.string().nullable().default("").required("Value is required"),
    name: yup.string().required("Value is required"),
    state: yup
      .object()
      .shape({
        key: yup.string(),
        name: yup.string(),
      })
      .nullable()
      .default("")
      .required("Value is required"),
    status: yup
      .mixed()
      .oneOf(["coming soon", "funding", "funded", "operating", "canceled"]),
  });
