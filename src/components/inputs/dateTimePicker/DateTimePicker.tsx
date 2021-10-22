// @ts-nocheck
import { InputAdornment } from "@mui/material";
import {
  LocalizationProvider,
  MobileDateTimePicker,
  MobileDatePickerProps,
} from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterDayjs";
import EventIcon from "@mui/icons-material/Event";
import { StyledTextField } from "components";

interface IDateTimePickerProps extends Partial<MobileDatePickerProps> {
  error?: boolean;
  success?: boolean;
}

export default function DateTimePicker({
  error,
  success,
  ...props
}: IDateTimePickerProps) {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <MobileDateTimePicker
        renderInput={(params) => (
          <StyledTextField
            {...params}
            fullWidth
            error={error}
            success={success}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" disablePointerEvents>
                  <EventIcon color="secondary" />
                </InputAdornment>
              ),
            }}
          />
        )}
        ampm={false}
        clearable
        {...props}
      />
    </LocalizationProvider>
  );
}
