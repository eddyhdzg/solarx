import { DeepMap } from "react-hook-form";

export const getDirtyValues = (
  dirtyFields: DeepMap<any, true>,
  values: DeepMap<any, true>,
  include: string[] = [],
  exclude: string[] = []
) => {
  return Object.fromEntries(
    Object.keys(dirtyFields)
      .filter(
        (key) =>
          (!include.length || include.includes(key)) &&
          (!exclude.length || !exclude.includes(key))
      )
      .map((key) => [key, values[key]])
  );
};

export const preventEnter = (e: React.KeyboardEvent<HTMLFormElement>) => {
  if (e?.code === "Enter") e.preventDefault();
};
