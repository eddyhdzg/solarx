import { PaletteMode } from "@mui/material";

export type ThemeType = PaletteMode | "system";

declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xxs: true; // adds the `xxs` breakpoint
  }
}
declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      gradient: string;
      login: string;
      glassBackground: {
        backgroundColor: string;
        backdropFilter: string;
      };
      cash: string;
      totalBalance: string;
      stocks: string;
      border: string;
      elevation: {
        1: string;
        2: string;
        3: string;
        4: string;
        6: string;
        8: string;
        12: string;
        16: string;
        24: string;
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      gradient?: string;
      login?: string;
      glassBackground?: {
        backgroundColor?: string;
        backdropFilter?: string;
      };
      cash?: string;
      totalBalance?: string;
      stocks?: string;
      border?: string;
      elevation?: {
        1?: string;
        2?: string;
        3?: string;
        4?: string;
        6?: string;
        8?: string;
        12?: string;
        16?: string;
        24?: string;
      };
    };
  }

  interface BreakpointOverrides {
    xxs: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    blue: true;
    green: true;
    yellow: true;
    red: true;
    deposit: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    subtitle3: React.CSSProperties;
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties;
    body3?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
    body3: true;
  }
}
