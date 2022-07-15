import * as yup from "yup";
import { TImages } from "solarx-types";

export interface EditProjectMediaSchema {
  coverImage: TImages;
  images: TImages;
}

export const editProjectMediaDefaultValues: EditProjectMediaSchema = {
  coverImage: [],
  images: [],
};

// @ts-ignore
export const editProjectMediaSchema: yup.SchemaOf<EditProjectMediaSchema> =
  yup.object({
    coverImage: yup.mixed(),
    images: yup.mixed(),
  });
