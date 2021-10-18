import * as yup from "yup";
import { TImages } from "types";

export interface IProjectMediaSchema {
  coverImage: TImages;
  images: TImages;
}

export const projectMediaDefaultValues: IProjectMediaSchema = {
  coverImage: [],
  images: [],
};

export const projectMediaSchema: yup.SchemaOf<IProjectMediaSchema> = yup.object(
  {
    coverImage: yup.mixed(),
    images: yup.mixed(),
  }
);
