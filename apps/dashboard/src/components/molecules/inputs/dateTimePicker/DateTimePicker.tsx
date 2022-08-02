import { InputAdornment } from "@mui/material";
import {
  LocalizationProvider,
  MobileDateTimePicker,
  MobileDatePickerProps,
} from "@mui/lab";
import AdapterDayjs from "@mui/lab/AdapterDayjs";
import EventIcon from "@mui/icons-material/Event";
import { useTranslation } from "react-i18next";
import { StyledTextField } from "components";

interface IDateTimePickerProps
  extends Omit<MobileDatePickerProps, "renderInput"> {
  error?: boolean;
  success?: boolean;
}

export default function DateTimePicker({
  label,
  success,
  error,
  value,
  onChange,
}: IDateTimePickerProps) {
  const { t } = useTranslation();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDateTimePicker
        label={label}
        value={value}
        onChange={onChange}
        okText={t("common.ok")}
        cancelText={t("common.cancel")}
        clearText={t("forms.clear")}
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
      />
    </LocalizationProvider>
  );
}
