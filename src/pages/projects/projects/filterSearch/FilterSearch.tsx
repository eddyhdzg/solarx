import { InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import useStyles from "./filterSearch.jss";

interface IFilterSearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}

const FilterSearch = ({ value, onChange, onReset }: IFilterSearchProps) => {
  const classes = useStyles();

  return (
    <div className={classes.filterSearch_search}>
      <div className={classes.filterSearch_searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.filterSearch_inputRoot,
          input: classes.filterSearch_inputInput,
        }}
        inputProps={{ "aria-label": "search-projects" }}
        value={value}
        onChange={onChange}
      />
      {value && (
        <IconButton
          className={classes.filterSearch_clearIcon}
          onClick={onReset}
          size="small"
          tabIndex="-1"
        >
          <ClearRoundedIcon />
        </IconButton>
      )}
    </div>
  );
};

export default FilterSearch;
