import { useState, useEffect } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { EditProjectMediaSchema } from "hooks";
import { TImagesPreview } from "solarx-types";
import { Box } from "@mui/material";

export default function ImagesPreview({ name }: FieldValues) {
  const { watch } = useFormContext<EditProjectMediaSchema>();
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
    <Box
      component="ul"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1.5,
      }}
    >
      {files.map((file) => {
        return (
          <Box
            component="li"
            key={typeof file === "string" ? file : file?.name}
            sx={{
              display: "inline-flex",
              boxSizing: "border-box",
              alignItems: "flex-end",
            }}
          >
            <Box
              component="img"
              src={typeof file === "string" ? file : file?.preview}
              alt={`file-preview`}
              sx={(theme) => ({
                maxWidth: theme.spacing(16),
                aspectRatio: "16 / 9",
                borderRadius: 1,
                objectFit: "cover",
              })}
            />
          </Box>
        );
      })}
    </Box>
  );
}
