import { useFormContext, Controller } from "react-hook-form";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface IDropzoneProps extends DropzoneOptions {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Dropzone = ({ onChange, multiple, ...options }: IDropzoneProps) => {
  const { t } = useTranslation();
  const { getRootProps, getInputProps } = useDropzone({
    multiple,
    ...options,
  });

  const text = multiple ? t("forms.DragNDropfiles") : t("forms.DragNDropfile");

  return (
    <Box
      {...getRootProps({ className: "dropzone" })}
      sx={{
        py: 4,
        px: 2,
        minHeight: 80,
        borderRadius: 0.5,
        width: "100%",
        backgroundColor: (theme) => theme.palette.grey[800],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <input {...getInputProps({ onChange })} />
      <CloudUploadIcon
        sx={{
          mb: 2,
        }}
      />
      <Typography variant="body2" component="p" color="textSecondary">
        {text}
      </Typography>
    </Box>
  );
};

interface IDropzoneFieldProps extends DropzoneOptions {
  name: string;
}

const DropzoneField = ({ name, ...rest }: IDropzoneFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field: { onChange, ref, ...field } }) => (
        <Dropzone
          onDrop={(e) => {
            return onChange(e);
          }}
          onFileDialogCancel={() => {
            return onChange([]);
          }}
          {...field}
          {...rest}
        />
      )}
      name={name}
      control={control}
      defaultValue={null}
    />
  );
};

export default DropzoneField;
