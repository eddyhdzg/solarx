import { FormControl, Select, FormControlProps } from "@material-ui/core";
import shallow from "zustand/shallow";
import { useCopywriting, useStore } from "hooks";
import LanguageIcon from "@material-ui/icons/Language";
import useStyles from "./localeSelect.jss";
import { localeOptions } from "constant";

const LocaleSelect: React.FC<FormControlProps> = (props) => {
  const classes = useStyles();
  const copy = useCopywriting();
  const { dispatch, locale } = useStore(
    ({ dispatch, locale }) => ({ dispatch, locale }),
    shallow
  );

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const payload = event.target.value as typeof locale;
    dispatch({ type: "LOCALE_TOGGLE_LOCALE", payload });
  };

  return (
    <FormControl variant="outlined" {...props}>
      <LanguageIcon className={classes.localeSelect_icon} />
      <Select
        native
        value={locale}
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
              {copy?.pages?.preferences[option]}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default LocaleSelect;
