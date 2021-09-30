import { IconButton, TableCell, TableRow, InputAdornment } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Controller } from "react-hook-form";
import { NumberFormatInput } from "components";
import { useCreateProjectDiscount, useProjectDiscountsMutation } from "hooks";
import { StyledTextField } from "./NewDiscountRow.styled";

interface INewDiscountRowProps {
  projectId?: string;
}

export default function NewDiscountRow({ projectId }: INewDiscountRowProps) {
  const {
    control,
    formState: { isValid, isDirty },
    handleSubmit,
    reset,
  } = useCreateProjectDiscount();
  const { createProjectDiscount } = useProjectDiscountsMutation();

  const handleSubmitAddDiscount = handleSubmit((values, e) => {
    e?.preventDefault();

    createProjectDiscount(projectId || "", values)
      .then(() => {
        reset({}, { keepDefaultValues: true });
      })
      .catch(() => {});
  });

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        New discount
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
          onClick={handleSubmitAddDiscount}
          color="primary"
        >
          <AddIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
