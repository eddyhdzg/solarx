import { useEffect } from "react";
import { IconButton, TableCell, TableRow } from "@mui/material";
import { Discount } from "types";
import EditIcon from "@mui/icons-material/Edit";
import { useEditProjectDiscount, useProjectDiscountsMutation } from "hooks";
import { Controller } from "react-hook-form";
import { StyledTextField } from "./ExistingDiscountRow.styled";

interface IExistingDiscountRowProps extends Discount {
  projectId?: string;
}

export default function ExistingDiscountRow({
  projectId,
  ...props
}: IExistingDiscountRowProps) {
  const {
    control,
    formState: { isValid, isDirty },
    handleSubmit,
    reset,
  } = useEditProjectDiscount();

  useEffect(() => {
    reset({ name: props.name, description: props.description });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.name, props.description]);

  const { editProjectDiscount } = useProjectDiscountsMutation();

  const handleSubmitEditDiscount = handleSubmit((values, e) => {
    e?.preventDefault();

    editProjectDiscount(projectId || "", props?.id || "", values).then(() => {
      reset({}, { keepDefaultValues: true });
    });
  });

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {props.id}
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
      <TableCell align="right">{props.discount} %</TableCell>
      <TableCell align="right">{props.quantity}</TableCell>
      <TableCell align="right">{props.sold}</TableCell>
      <TableCell align="right">
        <IconButton
          disabled={!isValid || !isDirty}
          onClick={handleSubmitEditDiscount}
          color="primary"
        >
          <EditIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
