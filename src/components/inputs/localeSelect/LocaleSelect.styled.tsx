import { Select, styled, nativeSelectClasses } from "@mui/material";
import Language from "@mui/icons-material/Language";

export const LanguageIcon = styled(Language)(({ theme }) => ({
  margin: "auto",
  position: "absolute",
  top: 0,
  left: theme.spacing(1.5),
  bottom: 0,
  pointerEvents: "none",
}));

export const LanguageSelect = styled(Select)(({ theme }) => ({
  maxWidth: theme.spacing(40),
  [`& .${nativeSelectClasses.select}`]: {
    paddingLeft: theme.spacing(6),
  },
}));
