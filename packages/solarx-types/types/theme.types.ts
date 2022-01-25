import * as React from "react";
import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  PaletteMode,
} from "@mui/material";

export interface IStyledSelectProps {
  success?: boolean;
}
export interface IStyledTextFieldProps {
  success?: boolean;
}

export type ThemeType = PaletteMode | "system";

declare module "@mui/material/styles" {
  interface ComponentsPropsList {
    StyledSelect: IStyledSelectProps;
    StyledTextField: IStyledTextFieldProps;
  }

  interface Components {
    StyledSelect?: {
      defaultProps?: ComponentsProps["MuiSelect"];
      styleOverrides?: ComponentsOverrides["MuiSelect"];
      variants?: ComponentsVariants["MuiSelect"];
    };
    StyledTextField?: {
      defaultProps?: ComponentsProps["MuiTextField"];
      styleOverrides?: ComponentsOverrides["MuiTextField"];
      variants?: ComponentsVariants["MuiTextField"];
    };
  }

  interface Theme {
    custom: {
      gradient: string;
      gradient2: string;
      login: string;
      glassBackground: {
        backgroundColor: string;
        backdropFilter: string;
      };
      cash: string;
      totalBalance: string;
      sxp: string;
      stocks: string;
      border: string;
      elevation: {
        0: string;
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
      sxp?: string;
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

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {}
}

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    blue: true;
    green: true;
    yellow: true;
    red: true;
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

declare module "@mui/material/TextField" {
  interface BaseTextFieldProps {
    success?: boolean;
  }
}

declare module "@mui/material/Select" {
  interface SelectProps {
    success?: boolean;
  }
}
