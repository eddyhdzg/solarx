import { useState, useEffect } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { IProjectFormSchema } from "hooks";
import useStyles from "./imagesPreview.jss";
import { TImagesPreview } from "types/firebase.types";

export default function ImagesPreview({ name }: FieldValues) {
  const { watch } = useFormContext<IProjectFormSchema>();
  const [coverImage] = watch([name]) as [TImagesPreview];
  const [files, setFiles] = useState<TImagesPreview>([]);
  const [pastFiles, setPastFiles] = useState<TImagesPreview>([]);
  const classes = useStyles();

  useEffect(() => {
    setPastFiles(files);

    setFiles(
      coverImage?.length
        ? coverImage.map((file) => {
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
  }, [coverImage]);

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
    <ul className={classes.imagesPreview_ul}>
      {files.map((file) => {
        return (
          <li
            key={typeof file === "string" ? file : file?.name}
            className={classes.imagesPreview_li}
          >
            <img
              src={typeof file === "string" ? file : file?.preview}
              alt={`file-preview`}
              className={classes.imagesPreview_img}
            />
          </li>
        );
      })}
    </ul>
  );
}
