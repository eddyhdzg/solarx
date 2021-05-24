import {
  FormControl,
  Select,
  FormControlProps,
  FormHelperText,
} from "@material-ui/core";
import { useStore } from "providers";
import shallow from "zustand/shallow";
import LightModeOutlinedIcon from "@material-ui/icons/LightModeOutlined";
import DarkModeOutlinedIcon from "@material-ui/icons/DarkModeOutlined";
import SettingsBrightnessIcon from "@material-ui/icons/SettingsBrightness";
import { ThemeType } from "types";
import useStyles from "./themeSelect.jss";

interface IThemeIconProps {
  themeType: ThemeType;
  className?: string;
}

const ThemeIcon = ({ themeType, ...props }: IThemeIconProps) => {
  switch (themeType) {
    case "light":
      return <LightModeOutlinedIcon {...props} />;
    case "auto":
      return <SettingsBrightnessIcon {...props} />;
    case "dark":
    default:
      return <DarkModeOutlinedIcon {...props} />;
  }
};

const ThemeSelect: React.FC<FormControlProps> = (props) => {
  const classes = useStyles();
  const { dispatch, themeType } = useStore(
    ({ dispatch, themeType }) => ({ dispatch, themeType }),
    shallow
  );

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const payload = event.target.value as typeof themeType;
    dispatch({ type: "THEME_SET_THEME", payload });
  };

  return (
    <>
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
          <option aria-label="None" value="" disabled />
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="auto">Auto</option>
        </Select>
      </FormControl>
      <FormHelperText className={classes.themeSelect_helperText}>
        Choose a theme preference
      </FormHelperText>
    </>
  );
};

export default ThemeSelect;
