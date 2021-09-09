import { FormControl, Select, FormControlProps } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import useStyles from "./localeSelect.jss";
import { localeOptions } from "constant";
import { useTranslation } from "react-i18next";
import { Locales } from "types";

const LocaleSelect: React.FC<FormControlProps> = (props) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const newLocale = event.target.value as Locales;
    i18n.changeLanguage(newLocale);
  };

  return (
    <FormControl variant="outlined" {...props}>
      <LanguageIcon className={classes.localeSelect_icon} />
      <Select
        native
        value={i18n.language}
        onChange={handleChange}
        inputProps={{
          id: "locale-select",
        }}
        classes={{
          select: classes.localeSelect_select,
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
