import { ThemeType } from "types";
import LightModeOutlinedIcon from "@material-ui/icons/LightModeOutlined";
import DarkModeOutlinedIcon from "@material-ui/icons/DarkModeOutlined";
import SettingsBrightnessIcon from "@material-ui/icons/SettingsBrightness";

export const options: ThemeType[] = ["light", "dark", "system"];

export interface IThemeIconProps {
  themeType: ThemeType;
  className?: string;
}

export const ThemeIcon = ({ themeType, ...props }: IThemeIconProps) => {
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
