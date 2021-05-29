import useSystemTheme from "./useSystemTheme";
import { useStore } from "providers";
import shallow from "zustand/shallow";

const useThemeType = () => {
  const systemTheme = useSystemTheme();
  const { themeType } = useStore(({ themeType }) => ({ themeType }), shallow);
  const paletteType = themeType === "system" ? systemTheme : themeType;
  return paletteType;
};

export default useThemeType;
