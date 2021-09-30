import { useState, useEffect } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { IProjectFormSchema } from "hooks";
import { TImagesPreview } from "types/firebase.types";
import {
  ImagesPreviewImg,
  ImagesPreviewLi,
  ImagesPreviewUl,
} from "./ImagesPreview.styled";

export default function ImagesPreview({ name }: FieldValues) {
  const { watch } = useFormContext<IProjectFormSchema>();
  const [imageArray] = watch([name]) as [TImagesPreview];
  const [files, setFiles] = useState<TImagesPreview>([]);
  const [pastFiles, setPastFiles] = useState<TImagesPreview>([]);

  useEffect(() => {
    setPastFiles(files);

    setFiles(
      imageArray?.length
        ? imageArray.map((file) => {
            if (typeof file === "string") {
              return file;
            }

            return Object.assign(file, {
              preview: URL.createObjectURL(file),
            });
          })
        : []
    );

    return () => {
      files?.forEach((file) => {
        if (typeof file !== "string") {
          URL.revokeObjectURL(file.preview);
        }
      });
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageArray]);

  useEffect(
    () => () => {
      pastFiles?.forEach((file) => {
        if (typeof file !== "string") {
          URL.revokeObjectURL(file.preview);
        }
      });
    },
    [pastFiles]
  );

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
