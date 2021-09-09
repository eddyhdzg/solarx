import { useFormContext, Controller } from "react-hook-form";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Typography } from "@material-ui/core";
import useStyles from "./dropzoneField.jss";
import { useTranslation } from "react-i18next";

interface IDropzoneProps extends DropzoneOptions {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Dropzone = ({ onChange, multiple, ...options }: IDropzoneProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { getRootProps, getInputProps } = useDropzone({
    multiple,
    ...options,
  });

  const text = multiple ? t("forms.DragNDropfiles") : t("forms.DragNDropfile");

  return (
    <div
      {...getRootProps({ className: "dropzone" })}
      className={classes.dropzone_root}
    >
      <input {...getInputProps({ onChange })} />
      <CloudUploadIcon className={classes.dropzone_icon} />
      <Typography variant="body2" component="p" color="textSecondary">
        {text}
      </Typography>
    </div>
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
