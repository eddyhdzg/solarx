import {
  FormControl,
  FormControlProps,
  SelectChangeEvent,
} from "@mui/material";
import { localeOptions } from "constant";
import { useTranslation } from "react-i18next";
import { Locales } from "types";
import { LanguageIcon, LanguageSelect } from "./LocaleSelect.styled";

const LocaleSelect: React.FC<FormControlProps> = (props) => {
  const { t, i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const newLocale = event.target.value as Locales;
    i18n.changeLanguage(newLocale);
  };

  return (
    <FormControl variant="outlined" {...props}>
      <LanguageIcon />
      <LanguageSelect
        native
        value={i18n.language}
        onChange={handleChange}
        inputProps={{
          id: "locale-select",
        }}
      >
        {localeOptions.map((option) => {
          return (
            <option key={option} value={option}>
              {t(`locales.${option}`)}
            </option>
          );
        })}
      </LanguageSelect>
    </FormControl>
  );
};

export default LocaleSelect;
