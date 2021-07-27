import { useEffect } from "react";
import { UseFormWatch, UseFormSetValue } from "react-hook-form";

const useFormPersist = (
  storageKey: string,
  {
    watch,
    setValue,
  }: { watch: UseFormWatch<any>; setValue: UseFormSetValue<any> },
  {
    storage = window.sessionStorage,
    exclude = [],
    include,
    defaultValues = {},
  }: {
    storage?: Storage;
    exclude?: string[];
    include?: any;
    defaultValues?: any;
  } = {}
) => {
  const watchedValues = watch(include);

  const values = exclude.length
    ? Object.entries(watchedValues)
        .filter(([key]) => !exclude.includes(key))
        .reduce((obj, [key, val]) => Object.assign(obj, { [key]: val }), {})
    : Object.assign({}, watchedValues);

  useEffect(() => {
    const storageItem = storage.getItem(storageKey);

    if (storageItem === null) return;

    const values = JSON.parse(storageItem);

    Object.keys(values).forEach((key) => {
      if (values[key] !== defaultValues[key]) {
        setValue(key, values[key], {
          shouldDirty: true,
          shouldValidate: true,
        });
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    storage.setItem(storageKey, JSON.stringify(values));
  });
};

export default useFormPersist;
