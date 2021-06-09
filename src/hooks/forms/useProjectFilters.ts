import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useFormPersist from "react-hook-form-persist";

export interface ProjectFiltersSchema {
  id: string;
  name: string;
  location: string;
  funded: string;
  search: string;
}

const schema: yup.SchemaOf<ProjectFiltersSchema> = yup
  .object({
    id: yup.string().defined(),
    name: yup.string().defined(),
    location: yup.string().defined(),
    funded: yup.string().defined(),
    search: yup.string().defined(),
  })
  .defined();

export default function useProjectFilters() {
  const form = useForm<ProjectFiltersSchema>({
    resolver: yupResolver(schema),
  });

  useFormPersist(
    "projectFilters",
    { watch: form.watch, setValue: form.setValue },
    {
      storage: window.localStorage,
    }
  );

  return form;
}
