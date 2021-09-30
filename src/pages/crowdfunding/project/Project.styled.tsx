import { styled, Grid } from "@mui/material";

export const HeaderGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export const Content = styled("div")(({ theme }) => ({
  positon: "relative",
  minHeight: theme.spacing(40),
  height: "100%",
  backgroundImage: theme.custom.elevation[1],
  marginLeft: `calc(-16px - env(safe-area-inset-left))`,
  paddingLeft: `calc(16px + env(safe-area-inset-left))`,
  marginRight: `calc(-16px - env(safe-area-inset-right))`,
  paddingRight: `calc(16px + env(safe-area-inset-right))`,
  [theme.breakpoints.up("md")]: {
    marginLeft: `calc(-24px - env(safe-area-inset-left))`,
    paddingLeft: `calc(24px + env(safe-area-inset-left))`,
    marginRight: `calc(-24px - env(safe-area-inset-right))`,
    paddingRight: `calc(24px + env(safe-area-inset-right))`,
  },
  [theme.breakpoints.up("lg")]: {
    marginTop: theme.spacing(-16),
  },
}));

export const RelativeDiv = styled("div")({
  position: "relative",
});
