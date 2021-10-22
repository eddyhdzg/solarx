import { IconButton, TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Controller, useFormContext } from "react-hook-form";
import { StyledTextField } from "components";
import { SubmitForm, EditBuyingOption, BuyingOption } from "types";
import { TableCellLast } from "../../ProjectForms.styled";

interface IEditBuyingOptionFormProps extends BuyingOption {
  onSubmit: SubmitForm;
  scrolled: boolean;
}

export default function EditBuyingOptionForm({
  onSubmit,
  scrolled,
  ...buyingOption
}: IEditBuyingOptionFormProps) {
  const {
    control,
    formState: { isValid, isDirty },
  } = useFormContext<EditBuyingOption>();

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {buyingOption?.id}
      </TableCell>
      <TableCell>
        <Controller
          name="title"
          control={control}
          render={({ field, fieldState }) => {
            return (
              <StyledTextField
                id="project-title"
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
          name="subtitle"
          control={control}
          render={({ field, fieldState }) => {
            return (
              <StyledTextField
                id="project-subtitle"
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
      <TableCell align="right">{buyingOption?.discount} %</TableCell>
      <TableCell align="right">{buyingOption?.quantity}</TableCell>
      <TableCell align="right">{buyingOption?.sharesSold}</TableCell>
      <TableCell align="right">{buyingOption?.investors}</TableCell>
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
