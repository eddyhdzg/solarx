import { useState, useEffect } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { IEditProjectMediaSchema } from "hooks";
import { TImagesPreview } from "solarx-types";
import {
  ImagesPreviewImg,
  ImagesPreviewLi,
  ImagesPreviewUl,
} from "./ImagesPreview.styled";

export default function ImagesPreview({ name }: FieldValues) {
  const { watch } = useFormContext<IEditProjectMediaSchema>();
  const [imageArray] = watch([name]) as [TImagesPreview];
  const [files, setFiles] = useState<TImagesPreview>([]);

  useEffect(() => {
    if (typeof imageArray === "string") {
      setFiles([imageArray]);
    } else if (imageArray?.length) {
      setFiles(
        imageArray?.map((file) => {
          if (typeof file === "string") {
            return file;
          }

          return Object.assign(file, {
            preview: URL.createObjectURL(file),
          });
        })
      );
    } else {
      setFiles([]);
    }
  }, [imageArray]);

  return (
    <ImagesPreviewUl>
      {files.map((file) => {
        return (
          <ImagesPreviewLi key={typeof file === "string" ? file : file?.name}>
            <ImagesPreviewImg
              src={typeof file === "string" ? file : file?.preview}
              alt={`file-preview`}
            />
          </ImagesPreviewLi>
        );
      })}
    </ImagesPreviewUl>
  );
}
