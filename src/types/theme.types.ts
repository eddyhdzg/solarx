import { Theme as MUITheme } from "@material-ui/core/styles";
import { customTheme } from "theme/useCreateMuiTheme";

declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xxs: true; // adds the `xxs` breakpoint
  }
}

export type Theme = MUITheme & typeof customTheme;
