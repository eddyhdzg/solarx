import { FormControl, Select, FormControlProps } from "@material-ui/core";
import { useStore } from "providers";
import shallow from "zustand/shallow";
import { useCopywriting } from "hooks";
import useStyles from "./themeSelect.jss";
import { ThemeIcon } from "../../icons/ThemeIcon";
import { themeOptions } from "constant";

const ThemeSelect: React.FC<FormControlProps> = (props) => {
  const classes = useStyles();
  const copy = useCopywriting();
  const { dispatch, themeType } = useStore(
    ({ dispatch, themeType }) => ({ dispatch, themeType }),
    shallow
  );

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const payload = event.target.value as typeof themeType;
    dispatch({ type: "THEME_SET_THEME", payload });
  };

  return (
    <FormControl variant="outlined" {...props}>
      <ThemeIcon themeType={themeType} className={classes.themeSelect_icon} />
      <Select
        native
        value={themeType}
        onChange={handleChange}
        inputProps={{
          id: "theme-select",
        }}
        classes={{
          select: classes.themeSelect_select,
        }}
      >
        {themeOptions.map((option) => {
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

export default ThemeSelect;
