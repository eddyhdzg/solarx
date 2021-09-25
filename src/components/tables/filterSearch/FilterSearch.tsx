import { InputBase, IconButton, alpha } from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";

interface IFilterSearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}

const FilterSearch = ({ value, onReset, ...props }: IFilterSearchProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <InputBase
        sx={{
          backgroundColor: (theme) => alpha(theme.palette.common.white, 0.15),
          "&:hover": {
            backgroundColor: (theme) => alpha(theme.palette.common.white, 0.25),
          },
          borderRadius: 1,
          "& .MuiInputBase-input": {
            color: (theme) => theme.palette.text.secondary,
            fontSize: 16,
            transition: (theme) => theme.transitions.create("width"),
            py: 1,
            pl: 5,
            pr: 4,
            width: {
              xxs: "100%",
              sm: "12ch",
            },
            "&:focus": {
              width: {
                sm: "20ch",
              },
            },
          },
        }}
        placeholder={t("forms.search")}
        startAdornment={
          <SearchIcon
            sx={{
              color: (theme) => theme.palette.text.secondary,
              position: "absolute",
              left: 8,
              userSelect: "none",
              pointerEvents: "none",
            }}
          />
        }
        value={value}
        endAdornment={
          value && (
            <IconButton
              onClick={onReset}
              size="small"
              sx={{
                position: "absolute",
                right: 4,
              }}
            >
              <ClearRoundedIcon />
            </IconButton>
          )
        }
        {...props}
      />
    </div>
  );
};

export default FilterSearch;
