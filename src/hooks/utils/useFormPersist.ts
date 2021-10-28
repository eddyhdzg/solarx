import { useEffect } from "react";
import { UseFormWatch, FieldValues, UseFormSetValue } from "react-hook-form";

const useFormPersist = (
  name: string,
  {
    watch,
    setValue,
  }: {
    watch: UseFormWatch<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
  },
  {
    storage,
    exclude = [],
    include,
    validate = true,
    dirty = true,
    defaultValues = {},
  }: {
    storage: Storage;
    exclude: string[];
    include?: string[];
    validate?: boolean;
    dirty?: boolean;
    defaultValues: { [key: string]: string };
  }
) => {
  const values = include ? watch(include) : watch();

  const getStorage = () => storage || window.sessionStorage;

  useEffect(() => {
    const str = getStorage().getItem(name);
    if (str) {
      const values = JSON.parse(str);
      const dataRestored: { [key: string]: string } = {};

      Object.keys(values).forEach((key) => {
        const shouldSet = !exclude.includes(key);
        if (shouldSet) {
          dataRestored[key] = values[key];
          if (defaultValues[key] !== values[key]) {
            setValue(key, values[key], {
              shouldValidate: validate,
              shouldDirty: dirty,
            });
          }
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  useEffect(() => {
    if (Object.entries(values).length) {
      getStorage().setItem(name, JSON.stringify(values));
    }
  });

  return {
    clear: () => getStorage().removeItem(name),
  };
};

export default useFormPersist;
