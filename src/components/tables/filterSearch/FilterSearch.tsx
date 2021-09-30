import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { useTranslation } from "react-i18next";
import {
  FilterSearchInputBase,
  SearchIcon,
  StyledIconButton,
} from "./FilterSearch.styled";

interface IFilterSearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: (names: string[]) => void;
}

const FilterSearch = ({ value, onReset, ...props }: IFilterSearchProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <FilterSearchInputBase
        name="search"
        placeholder={t("forms.search")}
        startAdornment={<SearchIcon />}
        value={value}
        endAdornment={
          value && (
            <StyledIconButton onClick={() => onReset(["search"])} size="small">
              <ClearRoundedIcon />
            </StyledIconButton>
          )
        }
        {...props}
      />
    </div>
  );
};

export default FilterSearch;
