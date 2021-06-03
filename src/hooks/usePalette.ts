import useSystemTheme from "./useSystemTheme";
import { useStore } from "hooks";
import shallow from "zustand/shallow";
import { PaletteType } from "@material-ui/core";

const usePalette = (): PaletteType => {
  const { themeType } = useStore(({ themeType }) => ({ themeType }), shallow);
  const systemTheme = useSystemTheme();
  const palette = themeType === "system" ? systemTheme : themeType;
  return palette;
};

export default usePalette;
