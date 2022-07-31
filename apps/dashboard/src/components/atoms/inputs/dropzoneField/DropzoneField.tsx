import { useFormContext, Controller } from "react-hook-form";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import CloudUpload from "@mui/icons-material/CloudUpload";
import { DropzoneFieldBox } from "./DropzoneField.styled";

interface IDropzoneProps extends DropzoneOptions {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  success: boolean;
}

const Dropzone = ({
  onChange,
  multiple,
  success,
  ...options
}: IDropzoneProps) => {
  const { t } = useTranslation();
  const { getRootProps, getInputProps } = useDropzone({
    multiple,
    ...options,
  });

  const text = multiple ? t("forms.dragNDropfiles") : t("forms.dragNDropfile");

  return (
    <DropzoneFieldBox
      success={success}
      {...getRootProps({ className: "dropzone" })}
    >
      <input {...getInputProps({ onChange })} />
      <CloudUpload
        sx={{
          mb: 2,
        }}
      />
      <Typography variant="body2" component="p" color="inherit">
        {text}
      </Typography>
    </DropzoneFieldBox>
  );
};

interface IDropzoneFieldProps extends DropzoneOptions {
  name: string;
}

export default function DropzoneField({ name, ...rest }: IDropzoneFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      render={({
        field: { onChange, ref, ...field },
        fieldState,
        formState,
      }) => (
        <Dropzone
          onDrop={(e) => {
            return onChange(e);
          }}
          onFileDialogCancel={() => {
            return onChange([]);
          }}
          {...field}
          {...rest}
          success={fieldState.isDirty && !formState.errors[name]}
        />
      )}
      name={name}
      control={control}
      defaultValue={null}
    />
  );
}
