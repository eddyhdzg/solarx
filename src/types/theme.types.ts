import { PaletteType } from "@material-ui/core";
import { CustomTheme } from "hooks/useCreateMuiTheme";

declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xxs: true; // adds the `xxs` breakpoint
  }
}

declare module "@material-ui/core/styles" {
  interface Theme extends CustomTheme {}
}

// export type Theme = MUITheme & typeof customTheme;
export type ThemeType = PaletteType | "system";
