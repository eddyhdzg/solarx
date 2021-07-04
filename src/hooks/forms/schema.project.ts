import * as yup from "yup";
import { Project } from "types";
import { MexicanState } from "constant";

export interface useCreateProjectFormSchema
  extends Omit<
    Project,
    | "id"
    | "created"
    | "state"
    | "sharesSold"
    | "coverImage"
    | "images"
    | "softDelete"
  > {
  state: MexicanState | null;
}

export interface useEditProjectFormSchema
  extends useCreateProjectFormSchema,
    Pick<Project, "softDelete"> {}

export const createProjectDefaultValues: useCreateProjectFormSchema = {
  name: "",
  state: null,
  city: "",
  company: "",
  businessType: "",
  ror: 0,
  sharePrice: 1,
  totalShares: 1,
  ppa: 0,
};

export type useProjectFormSchema =
  | useEditProjectFormSchema
  | useCreateProjectFormSchema;

export const editProjectDefaultValues: useEditProjectFormSchema = {
  softDelete: false,
  ...createProjectDefaultValues,
};

export const createProjectSchema: yup.SchemaOf<useCreateProjectFormSchema> =
  yup.object({
    // General
    name: yup.string().default("").required("Value is required"),
    state: yup
      .object()
      .shape({
        key: yup.string(),
        name: yup.string(),
      })
      .nullable()
      .default("")
      .required("Value is required"),
    city: yup.string().nullable().default("").required("Value is required"),
    company: yup.string().default("").required("Value is required"),
    businessType: yup
      .string()
      .nullable()
      .default("")
      .required("Value is required"),
    // Numbers
    ror: yup
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
    ppa: yup.number().default(0).min(0, "Min value is 0"),
  });

export const editProjectSchema: yup.SchemaOf<useEditProjectFormSchema> =
  createProjectSchema.concat(
    yup.object({
      // Edit
      softDelete: yup.boolean().default(false).required(),
    })
  );
