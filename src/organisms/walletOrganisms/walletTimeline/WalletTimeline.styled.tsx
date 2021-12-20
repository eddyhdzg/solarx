import { styled, Paper as MUIPaper } from "@mui/material";

export const Paper = styled(MUIPaper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export const Header = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
}));

export const TitleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
}));

export const ButtonGroupContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  flexGrow: 1,
});
