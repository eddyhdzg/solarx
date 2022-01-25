import * as yup from "yup";
import { TImages } from "solarx-types";

export interface IEditProjectMediaSchema {
  coverImage: TImages;
  images: TImages;
}

export const editProjectMediaDefaultValues: IEditProjectMediaSchema = {
  coverImage: [],
  images: [],
};

// @ts-ignore
export const editProjectMediaSchema: yup.SchemaOf<IEditProjectMediaSchema> =
  yup.object({
    coverImage: yup.mixed(),
    images: yup.mixed(),
  });
