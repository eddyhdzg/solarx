import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useFormPersist from "react-hook-form-persist";

export interface ProjectFiltersSchema {
  id: string;
  name: string;
  location: string;
  funded: string;
}

const schema: yup.SchemaOf<ProjectFiltersSchema> = yup
  .object({
    id: yup.string().defined(),
    name: yup.string().defined(),
    location: yup.string().defined(),
    funded: yup.string().defined(),
  })
  .defined();

interface useProjectFiltersProps {
  setFilter: (
    columnId: string,
    filterValue: string | boolean | undefined
  ) => void;
}

export default function useProjectFilters({
  setFilter,
}: useProjectFiltersProps) {
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

  const { id, name, location, funded } = form.watch();

  useEffect(() => {
    setFilter("id", id);
  }, [id, setFilter]);

  useEffect(() => {
    setFilter("name", name);
  }, [name, setFilter]);

  useEffect(() => {
    setFilter("location", location);
  }, [location, setFilter]);

  useEffect(() => {
    setFilter("funded", funded);
  }, [funded, setFilter]);

  return form;
}
