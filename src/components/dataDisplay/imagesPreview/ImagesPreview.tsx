import { useState, useEffect } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { IProjectFormSchema } from "hooks";
import { TImagesPreview } from "types/firebase.types";
import { Box } from "@mui/material";

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
    <Box
      component="ul"
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {files.map((file) => {
        return (
          <Box
            key={typeof file === "string" ? file : file?.name}
            sx={{
              display: "inline-flex",
              borderRadius: 1,
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: (theme) => theme.palette.divider,
              boxSizing: "border-box",
              alignItems: "flex-end",
              mb: 1,
              p: 0.5,
              mr: "auto",
            }}
          >
            <Box
              component="img"
              src={typeof file === "string" ? file : file?.preview}
              alt={`file-preview`}
              sx={{
                height: (theme) => theme.spacing(8),
                width: (theme) => theme.spacing(16),
                objectFit: "cover",
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
}
