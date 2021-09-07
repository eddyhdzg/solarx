import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFormPersist } from "../";

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
  length?: number;
}

export default function useProjectFilters({
  setFilter,
  length,
}: useProjectFiltersProps) {
  const form = useForm<ProjectFiltersSchema>({
    resolver: yupResolver(schema),
  });

  const { id, name, location, funded } = form.watch();

  useFormPersist(
    "projectFilters",
    { watch: form.watch, setValue: form.setValue },
    {
      storage: window.localStorage,
    }
  );

  useEffect(() => {
    setFilter("id", id);
  }, [id, setFilter, length]);

  useEffect(() => {
    setFilter("name", name);
  }, [name, setFilter, length]);

  useEffect(() => {
    setFilter("location", location);
  }, [location, setFilter, length]);

  useEffect(() => {
    setFilter("funded", funded);
  }, [funded, setFilter, length]);

  return form;
}
