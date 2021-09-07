import * as yup from "yup";
import { Project, TImages } from "types";
import { MexicanState } from "constant";
// import { checkAspectRatio } from "utils";
// const FILE_SIZE = 160 * 1024;
// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export interface IProjectDataFormSchema
  extends Omit<
    Project,
    "id" | "created" | "state" | "sharesSold" | "coverImage" | "images"
  > {
  state: MexicanState | null;
}

export interface IProjectMediaFormSchema {
  coverImage: TImages;
  images: TImages;
}

export interface IProjectFormSchema
  extends IProjectDataFormSchema,
    IProjectMediaFormSchema {}

export const projectFormDefaultValues: IProjectFormSchema = {
  name: "",
  state: null,
  city: "",
  company: "",
  businessType: "",
  roi: 0,
  sharePrice: 1,
  totalShares: 1,
  ppa: 0,
  archived: false,
  coverImage: [],
  images: [],
};

export const projectFormSchema: yup.SchemaOf<IProjectFormSchema> = yup.object({
  // General
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
  city: yup.string().nullable().default("").required("Value is required"),
  company: yup.string().nullable().default("").required("Value is required"),
  businessType: yup
    .string()
    .nullable()
    .default("")
    .required("Value is required"),
  // Numbers
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
  ppa: yup.number().default(0).min(0, "Min value is 0"),
  archived: yup.boolean().required(),
  // Media
  coverImage: yup.mixed(),
  // .test("coverImage", "File too large", (value: FileList) => {
  //   return (
  //     !value?.length || Boolean(value?.length && value[0].size <= FILE_SIZE)
  //   );
  // })
  // .test("fileFormat", "Unsupported Format", (value: FileList) => {
  //   return (
  //     !value?.length || Boolean(SUPPORTED_FORMATS.includes(value[0].type))
  //   );
  // })
  images: yup
    .mixed()
    .test("fileFormat", "Unsupported Format", (value: FileList) => {
      return true;
    }),
  // .test("fileFormat", "Unsupported Format", (value: FileList) => {
  //   return (
  //     !value?.length || Boolean(SUPPORTED_FORMATS.includes(value[0].type))
  //   );
  // }),
  // .test("fileAspectRatio", "Aspect Ratio is not 3x1", (value: FileList) => {
  //   if (!value?.length) return true;

  //   const aspectRatio = checkAspectRatio(value[0]);

  //   return aspectRatio
  //     .then((value) => {
  //       return value === 3;
  //     })
  //     .catch(() => {
  //       return false;
  //     });
  // }),
});
