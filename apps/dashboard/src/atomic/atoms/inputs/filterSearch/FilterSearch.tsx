import { InputBase, IconButton, alpha } from "@mui/material";
import { useTranslation } from "react-i18next";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import Search from "@mui/icons-material/Search";

interface IFilterSearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: (names: string[]) => void;
}

const FilterSearch = ({ value, onReset, ...props }: IFilterSearchProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <InputBase
        name="search"
        placeholder={t("forms.search")}
        startAdornment={
          <Search
            color="secondary"
            sx={{
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
              onClick={() => onReset(["search"])}
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
        sx={(theme) => ({
          backgroundColor: alpha(theme.palette.common.white, 0.15),
          "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
          },
          borderRadius: 1,
          "& .MuiInputBase-input": {
            color: theme.palette.text.secondary,
            fontSize: 16,
            transition: theme.transitions.create("width"),
            py: 1,
            pl: 5,
            pr: 4,
            width: "100%",
            [theme.breakpoints.up("xs")]: {
              width: "12ch",
              "&:focus": {
                width: "20ch",
              },
            },
          },
        })}
      />
    </div>
  );
};

export default FilterSearch;
