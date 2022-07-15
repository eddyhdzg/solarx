import { Controller, useFormContext } from "react-hook-form";
import { NumberFormatInput, StyledTextField } from "atomic";
import { SubmitForm, ProjectPrice } from "solarx-types";
import { EditProjectPriceSchema } from "hooks";
import { formatMoney, formatPercentage2Dec } from "utils";
import { IconButton, TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { TableCellLast } from "../../../ProjectForms.styled";

interface EditProjectPriceFormProps extends ProjectPrice {
  onSubmit: SubmitForm;
  scrolled: boolean;
}

export default function EditProjectPriceForm({
  onSubmit,
  scrolled,
  basePrice = 1,
  unit_amount = 1,
  ...price
}: EditProjectPriceFormProps) {
  const {
    control,
    formState: { isValid, isDirty },
  } = useFormContext<EditProjectPriceSchema>();
  const discount = (1 - unit_amount / basePrice) * 100;

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {price?.id}
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
      <TableCell align="right">{formatMoney(unit_amount)}</TableCell>
      <TableCell align="right">{formatMoney(basePrice)}</TableCell>
      <TableCell align="right">{formatPercentage2Dec(discount)}</TableCell>
      <TableCell>{price?.description}</TableCell>
      <TableCell align="right">{price?.investors}</TableCell>
      <TableCell align="right">{price?.sharesSold}</TableCell>
      <TableCellLast align="right" scrolled={scrolled}>
        <IconButton
          disabled={!isValid || !isDirty}
          onClick={onSubmit}
          color="primary"
        >
          <EditIcon />
        </IconButton>
      </TableCellLast>
    </TableRow>
  );
}
