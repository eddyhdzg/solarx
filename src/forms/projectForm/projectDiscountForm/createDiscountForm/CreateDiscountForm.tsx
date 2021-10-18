import { IconButton, TableCell, TableRow, InputAdornment } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Controller, useFormContext } from "react-hook-form";
import { NumberFormatInput, StyledTextField } from "components";
import { SubmitForm, CreateDiscount } from "types";

interface ICreateDiscountFormProps {
  onSubmit: SubmitForm;
}

export default function CreateDiscountForm({
  onSubmit,
}: ICreateDiscountFormProps) {
  const {
    control,
    formState: { isValid, isDirty },
  } = useFormContext<CreateDiscount>();

  return (
    <TableRow>
      <TableCell component="th" scope="row" />
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
      <TableCell align="right">
        <Controller
          name="discount"
          control={control}
          render={({ field, fieldState }) => (
            <StyledTextField
              id="project-discount"
              variant="outlined"
              fullWidth
              required
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              success={fieldState.isDirty && fieldState.isTouched}
              inputProps={{
                inputMode: "numeric",
                min: 1,
                max: 100,
                decimalScale: 0,
              }}
              InputProps={{
                inputComponent: NumberFormatInput as any,
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              {...field}
            />
          )}
        />
      </TableCell>
      <TableCell align="right">
        <Controller
          name="quantity"
          control={control}
          render={({ field, fieldState }) => (
            <StyledTextField
              id="project-quantity"
              variant="outlined"
              fullWidth
              required
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              success={fieldState.isDirty && fieldState.isTouched}
              inputProps={{
                inputMode: "numeric",
                min: 1,
                max: 500,
                decimalScale: 0,
              }}
              InputProps={{
                inputComponent: NumberFormatInput as any,
              }}
              {...field}
            />
          )}
        />
      </TableCell>
      <TableCell align="right" />
      <TableCell align="right">
        <IconButton
          disabled={!isValid || !isDirty}
          onClick={onSubmit}
          color="primary"
        >
          <AddIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
