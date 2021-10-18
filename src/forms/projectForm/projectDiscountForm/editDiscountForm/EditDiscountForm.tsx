import { IconButton, TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Controller, useFormContext } from "react-hook-form";
import { StyledTextField } from "components";
import { SubmitForm, EditDiscount, Discount } from "types";

interface IEditDiscountFormProps extends Discount {
  onSubmit: SubmitForm;
}

export default function EditDiscountForm({
  onSubmit,
  ...discount
}: IEditDiscountFormProps) {
  const {
    control,
    formState: { isValid, isDirty },
  } = useFormContext<EditDiscount>();

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {discount?.id}
      </TableCell>
      <TableCell>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => {
            return (
              <StyledTextField
                id="project-name"
                variant="outlined"
                fullWidth
                required
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message}
                inputProps={{
                  autoComplete: "disabled",
                }}
                success={fieldState.isDirty}
                {...field}
              />
            );
          }}
        />
      </TableCell>
      <TableCell>
        <Controller
          name="description"
          control={control}
          render={({ field, fieldState }) => {
            return (
              <StyledTextField
                id="project-description"
                variant="outlined"
                fullWidth
                required
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message}
                inputProps={{
                  autoComplete: "disabled",
                }}
                success={fieldState.isDirty}
                multiline
                {...field}
              />
            );
          }}
        />
      </TableCell>
      <TableCell align="right">{discount?.discount} %</TableCell>
      <TableCell align="right">{discount?.quantity}</TableCell>
      <TableCell align="right">{discount?.sharesSold}</TableCell>
      <TableCell align="right">
        <IconButton
          disabled={!isValid || !isDirty}
          onClick={onSubmit}
          color="primary"
        >
          <EditIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
