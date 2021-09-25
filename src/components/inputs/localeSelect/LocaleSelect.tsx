import {
  FormControl,
  Select,
  FormControlProps,
  SelectChangeEvent,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { localeOptions } from "constant";
import { useTranslation } from "react-i18next";
import { Locales } from "types";

const LocaleSelect: React.FC<FormControlProps> = (props) => {
  const { t, i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newLocale = event.target.value as Locales;
    i18n.changeLanguage(newLocale);
  };

  return (
    <FormControl variant="outlined" {...props}>
      <LanguageIcon
        sx={{
          margin: "auto",
          position: "absolute",
          top: "0",
          left: 12,
          bottom: 0,
          pointerEvents: "none",
        }}
      />
      <Select
        native
        value={i18n.language}
        onChange={handleChange}
        inputProps={{
          id: "locale-select",
        }}
        sx={{
          "& .MuiNativeSelect-select": {
            pl: 6,
          },
        }}
      >
        {localeOptions.map((option) => {
          return (
            <option key={option} value={option}>
              {t(`locales.${option}`)}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default LocaleSelect;
