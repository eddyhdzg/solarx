import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useFormPersist from "react-hook-form-persist";
import { Project } from "types";
import { useProjectsMutations } from "..";
import { useSnackbar } from "notistack";
import { MexicanState } from "constant";

export interface useCreateProjectFormSchema
  extends Omit<
    Project,
    "id" | "created" | "state" | "sharesSold" | "coverImage" | "images"
  > {
  state: MexicanState | null;
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
  // coverImage: yup.string(),
  // images: yup.array().of(yup.string()).default([]),
});
export default function useCreateProjectForm() {
  const defaultValues: useCreateProjectFormSchema = {
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

  const { createProject } = useProjectsMutations();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = form.handleSubmit((data, e) => {
    e?.preventDefault();

    createProject(data)
      .then(() => {
        enqueueSnackbar("Project Added! 🔥", { variant: "success" });
        form.reset(defaultValues);
      })
      .catch(() => {
        enqueueSnackbar("Project Not Added 😔", { variant: "error" });
      });
  });

  return { defaultValues, onSubmit, ...form };
}
