import { useFormContext, Controller } from "react-hook-form";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Typography } from "@material-ui/core";

import useStyles from "./dropzoneField.jss";

interface IDropzoneProps extends DropzoneOptions {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Dropzone = ({ onChange, ...options }: IDropzoneProps) => {
  const classes = useStyles();
  const { getRootProps, getInputProps } = useDropzone({
    ...options,
  });

  return (
    <div
      {...getRootProps({ className: "dropzone" })}
      className={classes.dropzone_root}
    >
      <input {...getInputProps({ onChange })} />
      <CloudUploadIcon className={classes.dropzone_icon} />
      <Typography variant="body2" component="p" color="textSecondary">
        Drag 'n' drop some files here, or click to select files
      </Typography>
    </div>
  );
};

interface IDropzoneFieldProps extends DropzoneOptions {
  name: string;
}

const DropzoneField = ({ name, multiple, ...rest }: IDropzoneFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field: { onChange, ref, ...field } }) => (
        <Dropzone
          multiple={multiple}
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
