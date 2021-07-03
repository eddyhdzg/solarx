import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useFormPersist from "react-hook-form-persist";
import { Project } from "types";
import { MexicanState } from "constant";

export interface useCreateProjectFormSchema
  extends Omit<
    Project,
    "id" | "funded" | "location" | "sharesSold" | "img" | "images"
  > {
  state: MexicanState;
  city: string;
  company: string;
  businessType: string;
  ppa: number;
}

const schema: yup.SchemaOf<useCreateProjectFormSchema> = yup.object({
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
  // Media
  // img: yup.string(),
  // images: yup.array().of(yup.string()).default([]),
});
export default function useCreateProjectForm() {
  const defaultValues: useCreateProjectFormSchema = {
    name: "",
    // @ts-ignore
    state: "",
    city: "",
    company: "",
    businessType: "",
    ror: 0,
    sharePrice: 1,
    totalShares: 1,
    ppa: 0,
  };

  const form = useForm<useCreateProjectFormSchema>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues,
  });

  useFormPersist(
    "createProject",
    { watch: form.watch, setValue: form.setValue },
    {
      storage: window.localStorage,
    }
  );

  return { defaultValues, ...form };
}
