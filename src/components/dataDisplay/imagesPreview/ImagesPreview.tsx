import { useState, useEffect } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { IProjectFormSchema } from "hooks";
import { FileWithPath } from "react-dropzone";
import useStyles from "./imagesPreview.jss";
import { Typography } from "@material-ui/core";

interface FilePreview extends FileWithPath {
  preview: string;
}

export default function ImagesPreview({ name }: FieldValues) {
  const { watch } = useFormContext<IProjectFormSchema>();
  const [coverImage] = watch([name]) as [FileWithPath[]];
  const [files, setFiles] = useState<FilePreview[]>([]);
  const [pastFiles, setPastFiles] = useState<FilePreview[]>([]);
  const classes = useStyles();

  useEffect(() => {
    setPastFiles(files);

    setFiles(
      coverImage?.length
        ? coverImage.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        : []
    );

    return () => {
      files?.forEach((file) => URL.revokeObjectURL(file.preview));
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coverImage]);

  useEffect(
    () => () => {
      pastFiles?.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [pastFiles]
  );

  return (
    <ul className={classes.imagesPreview_ul}>
      {files.map((file) => {
        return (
          <li key={file.name} className={classes.imagesPreview_li}>
            <img
              src={file?.preview}
              alt={`${file.name}-preview`}
              className={classes.imagesPreview_img}
            />
            <Typography variant="subtitle2" color="textSecondary">
              {file?.name}
            </Typography>
          </li>
        );
      })}
    </ul>
  );
}
