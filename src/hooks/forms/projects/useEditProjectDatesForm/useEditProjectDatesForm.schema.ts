import * as yup from "yup";

export interface IEditProjectDatesSchema {
  fundedDate: Date | null | undefined;
  releaseDate: Date | null | undefined;
  operationDate: Date | null | undefined;
}

export const editProjectDatesDefaultValues: IEditProjectDatesSchema = {
  fundedDate: null,
  releaseDate: null,
  operationDate: null,
};

export const editProjectDatesSchema: yup.SchemaOf<IEditProjectDatesSchema> =
  yup.object({
    fundedDate: yup.mixed().nullable(),
    releaseDate: yup.mixed().nullable(),
    operationDate: yup.mixed().nullable(),
  });
