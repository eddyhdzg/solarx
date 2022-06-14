import { useState, useEffect } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { IEditProjectMediaSchema } from "hooks";
import { TImagesPreview } from "solarx-types";
import { Box } from "@mui/material";

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
            component="li"
            key={typeof file === "string" ? file : file?.name}
            sx={{
              display: "inline-flex",
              borderRadius: 1,
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "divider",
              boxSizing: "border-box",
              alignItems: "flex-end",
              marginRight: "auto",
              mb: 1,
              p: 0.5,
            }}
          >
            <Box
              component="img"
              src={typeof file === "string" ? file : file?.preview}
              alt={`file-preview`}
              sx={(theme) => ({
                height: theme.spacing(8),
                width: theme.spacing(16),
                objectFit: "cover",
              })}
            />
          </Box>
        );
      })}
    </Box>
  );
}
