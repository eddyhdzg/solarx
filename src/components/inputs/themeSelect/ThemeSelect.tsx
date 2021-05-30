import { Button, ButtonGroup } from "@material-ui/core";
import { useStore } from "providers";
import shallow from "zustand/shallow";
import LightModeOutlinedIcon from "@material-ui/icons/LightModeOutlined";
import DarkModeOutlinedIcon from "@material-ui/icons/DarkModeOutlined";
import SettingsBrightnessIcon from "@material-ui/icons/SettingsBrightness";
import { ThemeType } from "types";
import { useCopywriting } from "hooks";
import useStyles from "./themeSelect.jss";

const options: ThemeType[] = ["light", "dark", "system"];

interface IThemeIconProps {
  themeType: ThemeType;
  className?: string;
}

const ThemeIcon = ({ themeType, ...props }: IThemeIconProps) => {
  switch (themeType) {
    case "light":
      return <LightModeOutlinedIcon {...props} />;
    case "system":
      return <SettingsBrightnessIcon {...props} />;
    case "dark":
    default:
      return <DarkModeOutlinedIcon {...props} />;
  }
};

const ThemeSelect: React.FC = () => {
  const classes = useStyles();
  const copy = useCopywriting();
  const { dispatch, themeType } = useStore(
    ({ dispatch, themeType }) => ({ dispatch, themeType }),
    shallow
  );

  const handleChange = (value: ThemeType) => {
    dispatch({ type: "THEME_SET_THEME", payload: value });
  };

  return (
    <ButtonGroup variant="outlined" aria-label="outlined primary button group">
      {options.map((option) => {
        return (
          <Button
            key={option}
            color={themeType === option ? "primary" : "default"}
            onClick={() => {
              handleChange(option);
            }}
          >
            <ThemeIcon
              themeType={option}
              className={classes.themeSelect_icon}
            />
            {copy.pages.preferences[option]}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default ThemeSelect;
