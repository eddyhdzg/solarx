import { InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import useStyles from "./filterSearch.jss";

interface IFilterSearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}

const FilterSearch = ({ value, onReset, ...props }: IFilterSearchProps) => {
  const classes = useStyles();

  return (
    <InputBase
      classes={classes}
      placeholder={"Search..."}
      startAdornment={<SearchIcon />}
      value={value}
      endAdornment={
        value && (
          <IconButton onClick={onReset} size="small">
            <ClearRoundedIcon />
          </IconButton>
        )
      }
      {...props}
    />
  );
};

export default FilterSearch;
