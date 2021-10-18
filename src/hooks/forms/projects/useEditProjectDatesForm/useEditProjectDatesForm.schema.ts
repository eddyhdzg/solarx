import * as yup from "yup";

export interface IProjectDatesSchema {
  fundedDate: Date | null | undefined;
  releaseDate: Date | null | undefined;
  operationDate: Date | null | undefined;
}

export const editProjectDatesDefaultValues: IProjectDatesSchema = {
  fundedDate: null,
  releaseDate: null,
  operationDate: null,
};

export const editProjectDatesSchema: yup.SchemaOf<IProjectDatesSchema> =
  yup.object({
    fundedDate: yup.mixed().nullable(),
    releaseDate: yup.mixed().nullable(),
    operationDate: yup.mixed().nullable(),
  });
