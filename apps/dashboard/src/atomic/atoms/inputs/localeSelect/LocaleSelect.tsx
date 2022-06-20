import { useEffect } from "react";
import { locale } from "dayjs";
import {
  FormControl,
  FormControlProps,
  Select,
  nativeSelectClasses,
  SelectChangeEvent,
} from "@mui/material";
import { localeOptions } from "constant";
import { useTranslation } from "react-i18next";
import { Locales } from "solarx-types";
import Language from "@mui/icons-material/Language";

const LocaleSelect: React.FC<FormControlProps> = (props) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    locale(i18n.language);
  }, [i18n.language]);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const newLocale = event.target.value as Locales;
    i18n.changeLanguage(newLocale);
  };

  return (
    <FormControl variant="outlined" {...props}>
      <Language
        sx={{
          margin: "auto",
          position: "absolute",
          top: 0,
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
          maxWidth: 320,
          [`& .${nativeSelectClasses.select}`]: {
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
